import styled from 'styled-components';

export const TimerComponent = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
        min-height: 100vh;
    }
`;

export const TimerContainer = styled.div`
    background-color: #fff;
    padding: 30px 30px 0px 30px;
    box-shadow: -6px 6px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 15px 15px;
    text-align: center;

    @media (max-width: 768px) {
        box-shadow: none;
        border-radius: none;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
