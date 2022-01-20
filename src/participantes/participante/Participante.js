import { ParticipanteContainer, ParticipanteDescricao, ParticipanteDescricaoContainer, ParticipanteImage, ParticipanteNome, ParticipantePontos, ParticipantePontosContainer, ParticipantePontosTitle } from "./style"

export default function Participante(){
    return(
        <ParticipanteContainer>
            <ParticipanteImage src="https://www.boredpanda.com/blog/wp-content/uploads/2021/10/501.jpg" />
            <ParticipanteDescricaoContainer>
                <ParticipanteNome>BJ Novak</ParticipanteNome>
                <ParticipanteDescricao>Et et nisi odio qui perferendis minus quia consequatur. A omnis magnam incidunt veritatis commodi exercitationem est aut. Qui repellendus dolores qui quidem est dignissimos.</ParticipanteDescricao>
                <ParticipantePontosContainer>
                    <ParticipantePontos>
                        <ParticipantePontosTitle>Pontos fortes:</ParticipantePontosTitle>
                        <ul style={{fontSize:'22px'}}>
                            <li>
                                Isoladissimo
                            </li>
                            <li>
                                Usa boas mascaras
                            </li>
                        </ul>
                    </ParticipantePontos>
                    <ParticipantePontos>
                        <ParticipantePontosTitle>Pontos fracos:</ParticipantePontosTitle>
                        <ul style={{fontSize:'22px'}}>
                            <li>
                                Sai um monte
                            </li>
                            <li>
                                Usa cloropica
                            </li>
                        </ul>
                    </ParticipantePontos>

                </ParticipantePontosContainer>
            </ParticipanteDescricaoContainer>
        </ParticipanteContainer>
    )
    
}