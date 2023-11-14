import { AboutBackgroud, AboutContainer, AboutContent, AboutTitle, AboutDesc, TitleContainer} from "./AboutElements"

export default function About() {
    return(
        <div>
        <AboutBackgroud>
            <AboutContainer>
                <AboutContent>
                <TitleContainer>
                    <AboutTitle>Nuestro Estudio</AboutTitle>
                </TitleContainer>
                <TitleContainer>
                    <AboutDesc>Ofrecemos servicios en materia legal en todo lo que abarca el servicio de Criptomonedas, Cyber-Delito y estafas</AboutDesc>
                </TitleContainer>

                
                </AboutContent>
            </AboutContainer>
        </AboutBackgroud>
        </div>
    )
}