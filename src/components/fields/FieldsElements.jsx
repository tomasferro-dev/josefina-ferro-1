import styled from "styled-components";
import studio from '../../assets/estudio003.jpg'

export const AboutBackgroud = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${studio}); 
    background-repeat: no-repeat;
    background-size: cover;
    user-select: none;

`;

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
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
    color: #fff;
    margin-bottom: 100px;
`;

export const AboutDesc = styled.p`
    width: 600px;
    color: #222;
    
`;