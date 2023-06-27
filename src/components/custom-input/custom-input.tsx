import React from 'react';
import { Slider, TextField, Typography } from '@mui/material';
import { CustomInputType } from './type';
import { configInputs } from '../../constants';

import { CustomInputContainer, CustomInputTextArea } from './custom-input.style';

export const CustomInput: React.FC<CustomInputType> = React.memo(({ minutes, seconds, isDisabled, handleOnChange }) => {
    return (
        <React.Fragment>
            {configInputs.map(({ label, name, min, max, step }) => (
                <React.Fragment key={label}>
                    <CustomInputContainer>
                        <Typography variant='h5'>{label}</Typography>
                        <CustomInputTextArea>
                            <TextField
                                name={name}
                                size='small'
                                value={isDisabled ? 0 : name === 'seconds' ? seconds : minutes}
                                onChange={handleOnChange}
                                disabled={isDisabled}
                                fullWidth
                                style={{ width: '100%' }}
                                inputProps={{ inputMode: 'numeric', min: min, max: max }}
                            />
                        </CustomInputTextArea>
                        <Slider
                            name={name}
                            valueLabelDisplay='auto'
                            step={step}
                            marks
                            value={isDisabled ? 0 : name === 'seconds' ? seconds : minutes}
                            onChange={handleOnChange}
                            min={min}
                            max={max}
                            disabled={isDisabled}
                        />
                    </CustomInputContainer>
                </React.Fragment>
            ))}
        </React.Fragment>
    );
});
