import styled from "styled-components"

export default function Loader(){
    return (
        <StyledLoader/>
    )
}

const StyledLoader = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -76px 0 0 -76px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin{
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
`

