import styled from "styled-components";
import studio from '../../assets/estudio003.jpg'

export const LandingContainer = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    @media screen and (max-width: 550px) {
        width: 100vh;
        height: 200vh;
    }
    height: 100vh;
    background-image: url(${studio}); 
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

`;

export const LandingContent = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin: 120px 300px 0 0 ;
    
`;

export const StyledTitle = styled.h1`
    /* border: 1px solid red; */
    font-size: 44px;
    color: #222;
    font-weight: bold;
    transition: all .3s;
    transform: skewX(0deg);

`;

export const DescContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    padding-right: 80px;

`;

export const LandingDesc = styled.p`
    /* border: 1px solid red; */
    font-size: 24px;
    width: 450px;
    color: #222;
    margin-top: 10px;

`;
