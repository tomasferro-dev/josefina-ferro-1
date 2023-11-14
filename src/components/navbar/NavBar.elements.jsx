import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 123px;
    top: 0;
    z-index: 99;
    background-color: transparent;
    position: fixed;
    user-select: none;

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
    &:hover {
        img{
            width: 105px ;
            transition: 0.1s ease-in;
        }
    }

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
    display: flex;
    margin: 0 20px;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;
    &:hover {
        font-size: 1.4rem;
        /* background-color: #427aa1; */
        /* border-bottom: 0.5rem solid #bee3db; */
        transition: 0.1s ease-in;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 70px;
    }
`;

export const MenuItemLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
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