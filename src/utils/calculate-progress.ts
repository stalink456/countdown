export const calculateProgress = (seconds: number, minutes: number, totalCount: number): number => {
    if (seconds === 0 && minutes === 0) return 0;

    if (totalCount) {
        const currentTime = seconds + minutes * 60;
        return 100 - (currentTime / totalCount) * 100;
    }

    return 0;
};
