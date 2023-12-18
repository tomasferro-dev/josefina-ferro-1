import styled from "styled-components";
import studio from '../../assets/estudio003.jpg'

export const AboutBackgroud = styled.div`
    width: 100%;
    height: 100vh;
    /* background-image: url(${studio}); 
    background-repeat: no-repeat;
    background-size: cover; */
    background-color: #222;
    user-select: none;

`;

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: start;
    gap: 50px;
`;
export const AboutTitle = styled.h1`
    color: #fff;
`;

export const AboutDesc = styled.p`
    width: 600px;
    color: #fff;
    
`;

export const FormContainer = styled.div`

`;

export const StyledForm = styled.form`
    display: grid;
    margin-top: 50px;
`;

export const Label = styled.label`
    color: #fff;
    margin-top: 5px;
`;

export const Input = styled.input`
    margin-top: 3px;
    background-color: #f2e9e4;
    border: none;

`;

export const InputQ = styled.input`
    height: 150px;
    background-color: #f2e9e4;
    border: none;

`;

export const SubmitButton = styled.button`
    margin-top: 30px;
    width: 80px;
    height: 40px;
    background-color: #f2e9e4;
    border-radius: 25px;
`;

export const StyledInfo = styled.ul`
    
`;

export const InfoItem = styled.ul`
    color: #fff;
    font-size: 20px;
`;