import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

export default function Topbar() {
    const params = useParams();
    return (
        <>
            <StyledTopbar>
                <Link to='/'>
                    {params &&(
                    <button>Voltar</button>
                    )}
                </Link>
                <h1>Cineflex</h1>
            </StyledTopbar>
        </>
    )
}


const StyledTopbar = styled.div`
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 70px;
    background-color: #C3CFD9;
    button{
        position: absolute;
        top:0;
        left: 0;
        border-radius: 5px;
        border: 1px solid #acbbc0;
        width: 60px;
        height: 30px;
        background-color: #9fc0d6;
        font-family: 'Roboto';
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        color:#bd8127;
        transition: all 0.3s;
    }
    button:hover{
        transform: scale(1.05);
        filter: brightness(110%);
    }
    h1{
        font-family: 'Roboto';
        font-size: 34px;
        color:#E8833A;
        font-weight: 400;
    }
`
