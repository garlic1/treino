import styled from "styled-components";

export const ParticipanteContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    padding: 0px 100px;
`;

export const ParticipanteImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
`
export const ParticipanteDescricaoContainer = styled.div`
    margin-left: 100px;
`;

export const ParticipanteNome = styled.h1`
    font-size: 50px;
    font-weight: bold;
    margin-top: 0;
`

export const ParticipanteDescricao = styled.p`
    font-size: 22px;
`;

export const ParticipantePontosContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ParticipantePontos = styled.div`
    width: 500px;
`

export const ParticipantePontosTitle = styled.h2`
    font-size: 30px;
`
