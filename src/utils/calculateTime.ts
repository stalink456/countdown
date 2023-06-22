export const calculateTime = (value: number): string | number => {
    return value < 10 ? value.toString().padStart(2, '0') : value;
};
