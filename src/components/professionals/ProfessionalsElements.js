import styled from "styled-components";
import studio from '../../assets/estudio003.jpg'

export const AboutBackgroud = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${studio}); 
    background-repeat: no-repeat;
    background-size: cover;
    user-select: none;
    transform: rotate(180deg);
    transform: rotateX(180deg);
`;

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(180deg);
    transform: rotateX(180deg);
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
    color: #fff;
    
`;

export const ProItem = styled.li`
    display: flex;
`;

export const ProList = styled.ul`
    
`;

export const ProName = styled.h1`
`;

export const ProDesc = styled.h3`
`;

export const ImageContainer = styled.div`
    /* width: 600px; */
    display: flex;
    justify-content: flex-end;
    
`;

export const Infocontainer = styled.div`
    /* width: 600px; */
    display: grid;
    gap: 10px;
    width: 600px;
`;

export const ProContainer = styled.div`
    display: flex;
    justify-content: center;;
    align-items: center;
    gap: 100px;
`;

export const ProfilePic = styled.img`
    width: 200px;
    border-radius: 50%;
    margin-left: -150px;
`;

export const ProWrapper = styled.div`
`;