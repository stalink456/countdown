import React from 'react';
import { Button } from '@mui/material';
import { CustomButtonType } from './type';

export const CustomButton: React.FC<CustomButtonType> = React.memo(({ buttonValue, handleTimeCount }) => {
    return (
        <Button
            variant={buttonValue === 'Cбросить' ? 'outlined' : 'contained'}
            onClick={handleTimeCount}
            style={{ marginBottom: '30px' }}
        >
            {buttonValue}
        </Button>
    );
});
