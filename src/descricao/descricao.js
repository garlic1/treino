import { DescricaoBody, DescricaoContainer, DescricaoTitle, ImagemFundo } from "./style";


export default function Descricao(){
    return(
        <DescricaoContainer>
            <ImagemFundo src="https://3reqjj2w37ot2bnym9qbiae1-wpengine.netdna-ssl.com/coronavirus/wp-content/uploads/sites/150/2020/03/coronavirus-under-the-microscope-1-scaled.jpg" />
            <DescricaoTitle>O que é?</DescricaoTitle>
            <DescricaoBody>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria 
                tipográfica e de impressos, e vem sendo utilizado desde o século XVI, 
                quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou 
                para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a 
                cinco séculos, como também ao salto para a editoração eletrônica, 
                permanecendo essencialmente inalterado.
            </DescricaoBody>
        </DescricaoContainer>
    )
}

