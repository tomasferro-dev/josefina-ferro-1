import { 
    IconLogo, 
    Menu, 
    MenuItem, 
    MenuItemLink, 
    FooterContainer, 
    FooterWrapper, FooterContactWrapper, FooterContactList, ContactItem, ContactLink } from './FooterElements';
import { Link } from 'react-router-dom'
import MainLogo from '../MainLogo'


function Footer() {
  return (
    <>
       <FooterContainer>
            <FooterWrapper>
                <IconLogo>
                    <Link to='/'><MainLogo/></Link>
                </IconLogo>
                <Menu>
                    <MenuItem>
                        <MenuItemLink to='/about'>Nosotros</MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/areas'>Areas de practica</MenuItemLink>
                    </MenuItem> 
                    <MenuItem>
                        <MenuItemLink to='/profesionales'>Profesionales</MenuItemLink>
                    </MenuItem> 
                </Menu>
                <FooterContactWrapper>
                    <FooterContactList>
                        <ContactItem><ContactLink to='/contacto'>Contacto</ContactLink></ContactItem>
                        <hr/>
                        <ContactItem>Teléfono: 2616628554</ContactItem>
                        <ContactItem>Av. San Martín 1234, Ciudad de Mendoza</ContactItem>
                        <ContactItem>josefinaferro@gmail.com</ContactItem>
                    </FooterContactList>
                </FooterContactWrapper>
            </FooterWrapper>
        </FooterContainer>
    </>
  )
}

export default Footer
