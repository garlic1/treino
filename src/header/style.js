import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
    background: rgba(143, 40, 26, 0.5);
    height: 150px;
`;

export const HeaderTitle = styled.div`
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-shadow: -5px 5px 4px black;
    margin-left: 50px;
`;

export const HeaderLinks = styled.div`
    display: flex;
    margin-left: auto;
    flex-direction: row;
`

export const HeaderLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin: 0px 10px;
`;