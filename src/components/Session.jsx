import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';

import Select from "../assets/Select";
import Footer from '../assets/Footer';
import Seat from './Seat';
import Loader from '../assets/Loader';

export default function Session() {
    const { showtimeId } = useParams();
    
    const sessionSeatsURL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`

    const [sessionSeats, setSessionSeats] = useState(null);
    const [movieImage, setMovieImage] = useState(null);
    const [movieTitle, setMovieTitle] = useState(null);
    const [session, setSession] = useState(null);

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
        return <Loader/>

    console.log(sessionSeats);
    return (
        <>
            <Select>Selecione o(s) assento(s)</Select>
            <Seats>
                {sessionSeats.map((seat, index) => (
                    <Seat key={index}
                    seat={seat}/>
                ))}
            </Seats>
            <Footer movieTitle={movieTitle} movieImage={movieImage} session={session}/>
        </>
    )
}

const Seats = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`