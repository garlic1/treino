import Participante from "./participante/Participante";
import { ParticipantesTitle } from "./style";

export default function Participantes(){
    return(
        <>
            <ParticipantesTitle>
                Participantes
            </ParticipantesTitle>
            <Participante />
        </>        
    )
}