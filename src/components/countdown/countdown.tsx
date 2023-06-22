import React from 'react';
import { CountdownType } from './type';

export const Countdown: React.FC<CountdownType> = React.memo(({ children }) => {
    return <React.Fragment>{children}</React.Fragment>;
});
