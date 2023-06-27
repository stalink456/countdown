export type CustomInputType = {
    minutes: number;
    seconds: number;
    isDisabled: boolean;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement> | Event | any, value?: number | number[]) => void;
};
