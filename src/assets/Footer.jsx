import styled from "styled-components"

export default function Footer({ movieImage, movieTitle, session }) {
    return (
        <StyledFooter>
            <figure>
                <img src={movieImage} />
            </figure>
            <div>
                <h1>{movieTitle}</h1>
                <p>{session}</p>
            </div>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    position: fixed;
    bottom:0;
    left: 0;
    width: 100vw;
    height: 120px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    figure{
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        width: 65px;
        height: 90px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }
    figure img{
        width: 80%;
        height: 80%;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    div h1, p{
        font-family: 'Roboto';
        font-size: 26px;
        margin-left: 15px;
        color: #293845;
    }
`