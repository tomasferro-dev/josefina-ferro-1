import styled from "styled-components";
import studio from '../../assets/estudio003.jpg'

export const AboutBackgroud = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${studio}); 
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(180deg);
    transform: rotateX(180deg);
    user-select: none;

`;

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    transform: rotate(180deg);
    transform: rotateX(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AboutContent = styled.div`
    display: grid;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const AboutTitle = styled.h1`
    color: #222;
    margin-bottom: 100px;
`;

export const AboutDesc = styled.p`
    width: 600px;
    color: #fff;
    
`;