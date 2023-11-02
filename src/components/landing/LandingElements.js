import styled from "styled-components";
import studio from '../../assets/estudio001.jpg'

export const LandingContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${studio}); 
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LandingContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`;

export const StyledTitle = styled.h1`
    font-size: 44px;
    color: #fff;
    font-weight: bold;
    transition: all .3s;
    transform: skewX(0deg);
`;

export const LandingDesc = styled.p`
    font-size: 24px;
    width: 450px;
    color: #fff;
    margin-top: 10px;

`;
