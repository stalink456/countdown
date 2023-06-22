import styled from 'styled-components';

export const CustomInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const CustomInputTextArea = styled.div`
    width: 140px;
    margin: 0 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
