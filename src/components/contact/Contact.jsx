import { AboutBackgroud, AboutContainer, ContactContent, AboutTitle, AboutDesc, TitleContainer,FormContainer, StyledForm, Label, Input, InputQ, SubmitButton, StyledInfo, InfoItem} from "./ContactElements"

export default function About() {
    return(
        <div>
        <AboutBackgroud>
            <AboutContainer>
                <ContactContent>
                    <TitleContainer>
                        <div>
                            <AboutTitle>Contacta con nosotros</AboutTitle>
                            <AboutDesc>Ofrecemos atención personalizada. En menos de 24hs tendrás una respuesta.</AboutDesc>
                        </div>
                        <StyledInfo>
                            <InfoItem>Teléfono: 261-662-8554</InfoItem>
                            <InfoItem>Av. San Martin 123, Ciudad de Mendoza</InfoItem>
                            <InfoItem>josefinaferro@gmail.com</InfoItem>
                        </StyledInfo>
                    </TitleContainer>
                    <FormContainer>
                        <StyledForm>
                            <Label>Nombre</Label>
                            <Input type="text"></Input>
                            <Label>Apellido</Label>
                            <Input type="text"></Input>
                            <Label>E-mail</Label>
                            <Input type="text"></Input>
                            <Label>Celular</Label>
                            <Input type="text"></Input>
                            <Label>Tu consulta</Label>
                            <InputQ type="text"></InputQ>
                            <SubmitButton>
                                <p>Enviar</p>
                            </SubmitButton>
                        </StyledForm>
                        
                    </FormContainer>
                </ContactContent>
            </AboutContainer>
        </AboutBackgroud>
        </div>
    )
}