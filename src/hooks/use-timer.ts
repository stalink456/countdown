import React from 'react';
import { buttonConfig } from '../constants';
import { calculateTime } from '../utils/calculateTime';
import { calculateProgress } from '../utils/calculate-progress';
import sound from '../assets/sounds/sound.mp3';

export const useTimer = () => {
    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [buttonValue, setButtonValue] = React.useState(buttonConfig['start']);
    const [isRunning, setIsRunning] = React.useState<boolean | null>(null);
    const [isDisabledInput, setIsDisabledInput] = React.useState<boolean>(false);
    const [totalCount, setTotalCount] = React.useState<number>(0);
    const timerRef = React.useRef<number | undefined>();
    const calculateSeconds = calculateTime(seconds);
    const calculateMinutes = calculateTime(minutes);
    const progress = calculateProgress(seconds, minutes, totalCount);

    React.useEffect(() => {
        if (isRunning) {
            timerRef.current = window.setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1);
                } else if (minutes > 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(59);
                }
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [seconds, minutes, isRunning, progress]);

    React.useEffect(() => {
        if (timerRef.current && minutes === 0 && seconds === 0) {
            new Audio(sound).play();
            setIsDisabledInput(false);
            setButtonValue(buttonConfig['start']);
            setIsRunning(false);
            timerRef.current = undefined;
        }
    }, [minutes, progress, seconds]);

    const handleStartTimer = React.useCallback(() => {
        if (buttonValue === buttonConfig['start']) {
            if (minutes !== 0 || seconds !== 0) {
                setTotalCount(seconds + minutes * 60);
                setIsDisabledInput(true);
                setIsRunning(true);
                setButtonValue(buttonConfig['pause']);
            }
        }

        if (buttonValue === buttonConfig['continue']) {
            setIsRunning(true);
            setButtonValue(buttonConfig['pause']);
        }

        if (buttonValue === buttonConfig['pause']) {
            setButtonValue(buttonConfig['continue']);
            setIsRunning(false);
        }
    }, [buttonValue, minutes, seconds]);

    const handleResetTimer = React.useCallback(() => {
        setIsRunning(false);
        setButtonValue(buttonConfig['start']);
        clearInterval(timerRef.current);
        timerRef.current = undefined;
        setSeconds(0);
        setMinutes(0);
        setIsDisabledInput(false);
    }, []);

    const handleChangeTime = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | Event | any, value?: number | number[]) => {
            if (value === undefined) {
                const { name, value } = event.target;

                if (name === 'minutes') {
                    setMinutes(+value);
                } else {
                    setSeconds(+value);
                }
            } else {
                const { name } = event.target;

                if (name === 'minutes') {
                    setMinutes(value as number);
                } else {
                    setSeconds(value as number);
                }
            }
        },
        []
    );

    return {
        seconds,
        minutes,
        buttonValue,
        isDisabledInput,
        calculateSeconds,
        calculateMinutes,
        progress,

        handleChangeTime,
        handleStartTimer,
        handleResetTimer,
    };
};
