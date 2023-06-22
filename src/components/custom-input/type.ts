export type CustomInputType = {
    text: string;
    value: number;
    isDisabled: boolean;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement> | Event | any, value?: number | number[]) => void;
};
