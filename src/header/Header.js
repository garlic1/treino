import { HeaderContainer, HeaderLink, HeaderTitle, HeaderLinks } from './style';

export default function Header(){
    return (
        <HeaderContainer>
            <HeaderTitle> Bolão BDSM </HeaderTitle>
            <HeaderLinks>
                <HeaderLink href='https://google.com'> O que é? </HeaderLink>
                <HeaderLink> Participantes </HeaderLink>
                <HeaderLink> Inscreva-se </HeaderLink>
            </HeaderLinks>            
        </HeaderContainer>
    )
}