import React from 'react';
import { Typography, LinearProgress } from '@mui/material';
import { useTimer } from '../../hooks/use-timer';
import { CustomButton } from '../custom-button';
import { Countdown } from '../countdown';
import { CustomInput } from '../custom-input';

import { TimerComponent, TimerContainer, ButtonWrapper } from './timer.style';

export const Timer: React.FC = React.memo(() => {
    const {
        buttonValue,
        seconds,
        minutes,
        isDisabledInput,
        calculateSeconds,
        calculateMinutes,
        progress,
        handleStartTimer,
        handleResetTimer,
        handleChangeTime,
    } = useTimer();

    return (
        <TimerComponent>
            <LinearProgress variant='determinate' value={progress} color='success' />
            <TimerContainer>
                <Typography variant='h4' mb={2}>
                    Таймер
                </Typography>

                <Countdown>
                    <CustomInput
                        text='Минуты'
                        value={minutes}
                        handleOnChange={handleChangeTime}
                        isDisabled={isDisabledInput}
                    />
                    <CustomInput
                        text='Секунды'
                        value={seconds}
                        handleOnChange={handleChangeTime}
                        isDisabled={isDisabledInput}
                    />
                </Countdown>

                <Typography variant='h5' mb={4}>
                    {calculateMinutes}:{calculateSeconds}
                </Typography>

                <ButtonWrapper>
                    <CustomButton buttonValue={buttonValue} handleTimeCount={handleStartTimer} />
                    <CustomButton buttonValue='Cбросить' handleTimeCount={handleResetTimer} />
                </ButtonWrapper>
            </TimerContainer>
        </TimerComponent>
    );
});
