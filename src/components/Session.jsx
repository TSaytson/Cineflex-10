import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

import Select from "../assets/Select";
import Footer from '../assets/Footer';
import Seat from './Seat';
import Loader from '../assets/Loader';
import { Form } from 'react-router-dom';

export default function Session() {
    const { showtimeId } = useParams();

    const sessionSeatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`

    const [sessionSeats, setSessionSeats] = useState(null);
    const [movieImage, setMovieImage] = useState(null);
    const [movieTitle, setMovieTitle] = useState(null);
    const [session, setSession] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        console.log('entrou no useEffect');
        const promise = axios.get(sessionSeatsURL);
        promise.then((response) => {

            console.log(response.data);
            setMovieImage(response.data.movie.posterURL);
            setMovieTitle(response.data.movie.title);
            setSession(`${response.data.day.weekday} - ${response.data.name}`);
            setSessionSeats(response.data.seats);
        });
        promise.catch((error) =>
            console.log(error.response.data));
    }, []);

    if (!sessionSeats)
        return <Loader />

    console.log(selectedSeats);

    return (
        <>
            <Select>Selecione o(s) assento(s)</Select>
            <Seats>
                {sessionSeats.map((seat, index) => (
                    <Seat key={index}
                        seat={seat}
                        selectedSeats={selectedSeats}
                        setSelectedSeats={setSelectedSeats}/>
                ))}
            </Seats>
            <SeatsDescription>
                <h1>
                    <li></li>
                    Selecionado
                </h1>
                <h1>
                    <li></li>
                    Disponível
                </h1>
                <h1>
                    <li></li>
                    Indisponível
                </h1>
            </SeatsDescription>
            <BuyerInfo>
                <div>
                    <h1>Nome do comprador:</h1>
                    <input type='text' placeholder='Digite seu nome...'></input>
                </div>
                <div>
                    <h1>CPF do comprador:</h1>
                    <input type='text' placeholder='Digite seu CPF...'></input>
                </div>
            </BuyerInfo>

            <ReserveSeats>Reservar assento(s)</ReserveSeats>
            <Footer movieTitle={movieTitle} movieImage={movieImage} session={session} />
        </>
    )
}

const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const SeatsDescription = styled.ul`
    display: flex;
    justify-content: space-evenly;
    li{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    h1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto';
        font-size: 13px;
        color:#4E5A65;
    }
    h1:nth-child(1) li{
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }
    h1:nth-child(2) li{
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    h1:nth-child(3) li{
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
`
const BuyerInfo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    div{
        margin-bottom: 10px;
    }
    div h1{
        font-family: 'Roboto';
        font-size: 18px;
        color: #293845;
    }
    div input{
        background-color: white;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        height: 50px;
        width: 80vw;
        font-family: 'Roboto';
        font-size: 18px;
        padding-left: 15px;
    }
    div input::placeholder{
        font-family: 'Roboto';
        font-size: 18px;
        color: #AFAFAF;
    }
`
const ReserveSeats = styled.button`
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #E8833A;
    margin-bottom: 150px;
    width: 50vw;
    height: 40px;
    border-radius: 3px;
    border: none;

    font-family: 'Roboto';
    font-size: 18px;
    color: white;
    cursor: pointer;
`