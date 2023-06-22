import React from 'react';
import { Slider, TextField, Typography } from '@mui/material';
import { CustomInputType } from './type';

import { CustomInputContainer, CustomInputTextArea } from './custom-input.style';

export const CustomInput: React.FC<CustomInputType> = React.memo(({ text, value, isDisabled, handleOnChange }) => {
    return (
        <CustomInputContainer>
            <Typography variant='h5'>{text}</Typography>
            <CustomInputTextArea>
                <TextField
                    name={text === 'Секунды' ? 'seconds' : 'minutes'}
                    size='small'
                    value={isDisabled ? 0 : value}
                    onChange={handleOnChange}
                    disabled={isDisabled}
                    fullWidth
                    style={{ width: '100%' }}
                />
            </CustomInputTextArea>
            <Slider
                name={text === 'Секунды' ? 'seconds' : 'minutes'}
                valueLabelDisplay='auto'
                step={text === 'Секунды' ? 15 : 30}
                marks
                value={isDisabled ? 0 : value}
                onChange={handleOnChange}
                min={0}
                max={text === 'Секунды' ? 60 : 720}
                disabled={isDisabled}
            />
        </CustomInputContainer>
    );
});
