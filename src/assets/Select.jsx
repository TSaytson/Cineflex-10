import styled from "styled-components"

export default function Select({children, success}){

    return <StyledSelect success={success}>{children}</StyledSelect>
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
    font-weight: ${(props) => props.success ? 700 : 400};
    color: ${(props) => props.success? '#247A6B' : '#293845'};
    letter-spacing: 0.04em;
`
