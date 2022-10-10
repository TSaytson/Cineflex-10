import styled from "styled-components"

export default function Select({children}){

    return <StyledSelect>{children}</StyledSelect>
}

const StyledSelect = styled.h1`
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100vw;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    letter-spacing: 0.04em;
`
