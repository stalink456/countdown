export const buttonConfig = {
    start: 'Запустить',
    pause: 'Пауза',
    continue: 'Возобновить',
};

export const configInputs = [
    {
        label: 'Минуты',
        name: 'minutes',
        min: 0,
        max: 720,
        step: 30,
    },
    {
        label: 'Секунды',
        name: 'seconds',
        min: 0,
        max: 59,
        step: 15,
    },
];