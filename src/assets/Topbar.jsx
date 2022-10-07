import styled from "styled-components";

export default function Topbar(props) {
    return (
        <>
            <StyledTopbar>
                <h1>Cineflex</h1>
            </StyledTopbar>
            <Select>Selecione {props.children}</Select>
        </>
    )
}


const StyledTopbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    h1{
        font-family: 'Roboto';
        font-size: 34px;
        color:#E8833A;
        font-weight: 400;
    }
`
const Select = styled.h1`
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
