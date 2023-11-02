import mainLogo from '../assets/logo-001.png';
import styled from 'styled-components';

const Logo = styled.img`
    width: 100px;
`;

export default function MainLogo() {
    return(
        <>
            <Logo src={mainLogo} alt='main-logo' />
        </>
    )
} 