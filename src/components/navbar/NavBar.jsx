import { Link} from 'react-router-dom'
import MainLogo from '../MainLogo'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavBarContainer, NavBarWrapper } from './NavBar.elements'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

export default function NavBar() {

    const [click, setClick] = useState(false);
    
    const handleClick = () => {
        setClick(!click);
    };

    return(
        <NavBarContainer>
            <NavBarWrapper>
                <IconLogo>
                    <Link to='/'><MainLogo/></Link>
                </IconLogo>

                <IconLogoMobile onClick={() => handleClick()}>
                    {click ? <FaTimes/> : <FaBars/>}
                </IconLogoMobile>

                <Menu click = {click}>
                    <MenuItem>
                        <MenuItemLink to='/'>Home </MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/about'>Nosotros </MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/areas'>Areas de practica </MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/profesionales'>Profesionales </MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/contacto'>Contacto </MenuItemLink>
                    </MenuItem> 
                </Menu>
            </NavBarWrapper>
        </NavBarContainer>
    )
}