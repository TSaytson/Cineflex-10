import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Select from "../assets/Select"

export default function Success() {
    const location = useLocation();
    console.log(location.state);
    return (
        <>
            <Select success={true}>
                Pedido feito
                com sucesso!
            </Select>
            <StyledDiv>
                <h1>
                    Filme e sessão
                </h1>
                <p>
                    {location.state.movieTitle}
                </p>
                <p>
                    {location.state.date}
                </p>
            </StyledDiv>
            <StyledDiv>
                <h1>
                    Ingressos
                </h1>
                {location.state.seatsName.map((seat) => 
                <p>
                    Assento {seat}
                </p>)}
            </StyledDiv>
            <StyledDiv>
                <h1>
                    Comprador
                </h1>
                {location.state.buyerInfo.map((info, index) =>
                    <p key={index}>
                        {index === 0 ? `Nome: ${info}` : `CPF: ${info}`}
                    </p>
                )}
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
    margin-left: 30px;
    margin-bottom: 30px;
    font-family: 'Roboto';
    letter-spacing: 0.04em;
    color: #293845;
    h1{
        font-weight: 700;
        font-size: 24px;
    }

    p{
        font-size: 22px;
    }
`