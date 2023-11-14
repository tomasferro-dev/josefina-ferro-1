import { AboutBackgroud, AboutContainer, AboutContent, AboutTitle, AboutDesc, TitleContainer} from "./FieldsElements"

export default function About() {
    return(
        <div>
        <AboutBackgroud>
            <AboutContainer>
                <AboutContent>
                <TitleContainer>
                    <AboutTitle>Áreas de Practica</AboutTitle>
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