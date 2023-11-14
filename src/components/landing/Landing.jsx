import { LandingContainer,LandingContent,StyledTitle,LandingDesc, DescContainer } from "./LandingElements.jsx";

export default function Landing() {
    return (
        <>
            <LandingContainer>
                <LandingContent>
                    <StyledTitle>Estudio Juridico Penal<br/>Abogada Josefina Ferro</StyledTitle>
                    <DescContainer><LandingDesc>Asesoria Legal en Cyber-Delito</LandingDesc></DescContainer>
                </LandingContent>
            </LandingContainer>
        </>
    )
}