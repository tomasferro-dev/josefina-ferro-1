import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
    width: 100%;
    height: 123px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #118ab2;
`;

export const NavBarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1080px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 93vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => click ? 0 : '-120%'};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: #118ab2;
    }

`;

export const MenuItem = styled.li`
    height: 100%;
    min-width: 100px;
    padding: 0.5rem 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: 'Oswald';
    font-weight: 400;

    &:hover {
        background-color: #023e8a;
        border-bottom: 0.5rem solid #90e0ef;
        transition: 0.1s ease-in;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
    }
`;

export const MenuItemLink = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #e5e5e5;
`;

export const IconLogoMobile = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: flex;
        color: #e5e5e5;
        font-size: 2rem;
        padding-right: 1rem;

    }
`;