import { AboutBackgroud, AboutContainer, AboutContent, AboutTitle, AboutDesc, TitleContainer, ProItem, ProList,ProName, Infocontainer, ImageContainer, ProContainer, ProfilePic, ProWrapper, ProDesc} from "./ProfessionalsElements"
import josefina from '../../assets/josefina-ferro.jpg';

export default function About() {
    return(
        <div>
        <AboutBackgroud>
            <AboutContainer>
                <AboutContent>
                <TitleContainer>
                    <AboutTitle>Profesionales</AboutTitle>
                </TitleContainer>
                <TitleContainer>
                    <AboutDesc>
                        <ProList>
                            <ProItem>
                            <ProWrapper>
                                <ProContainer>
                                    <ImageContainer>
                                        <ProfilePic src={josefina} alt="image-josefina" />
                                    </ImageContainer>
                                    <Infocontainer>
                                        <ProName>Josefina Ferro</ProName>
                                        <ProDesc>Doctora en Derecho recibida de la Universidad Nacional de Cuyo, ha dedicado su temprana edad al estudio del derecho y al ejercicio del mismo en la rama penal. Realizó su maestría en derecho penal, cerrando esa etapa con su tesis "Criptoactivos como herramienta de agotamiento del provecho de la ciberestafa"</ProDesc>
                                    </Infocontainer>
                                </ProContainer>
                            </ProWrapper>
                            </ProItem>
                        </ProList>
                    </AboutDesc>
                </TitleContainer>
                </AboutContent>
            </AboutContainer>
        </AboutBackgroud>
        </div>
    )
}