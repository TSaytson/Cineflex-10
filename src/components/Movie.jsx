import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

import Loader from '../assets/Loader';
import Select from '../assets/Select'
import Footer from '../assets/Footer'


export default function Movie() {
    const { movieId } = useParams();
    const movieSessionsURL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`
    const [sessions, setSessions] = useState(null);
    const [movieImage, setMovieImage] = useState(null);
    const [movieTitle, setMovieTitle] = useState(null);

    useEffect(() => {
        const promise = axios.get(movieSessionsURL);
        promise.then((response) => {
            setTimeout(() => setSessions(response.data.days), 1000);
            console.log(response.data);
            setMovieImage(response.data.posterURL);
            setMovieTitle(response.data.title);
        })
    }, []);
    console.log(sessions);

    if (!sessions)
        return <Loader />

    return (
        <>
            <Select>Selecione o horário</Select>
            <Session>
                {sessions.map((session, index) =>
                    <li key={index}>
                        <div>
                            <span>
                                {session.weekday} - {session.date}
                            </span>
                        </div>
                        <ul>
                            {session.showtimes.map((showtime, index) =>
                                <li key={index}>
                                    <Link key={index} to={`/session/${showtime.id}`}>
                                        {showtime.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </Session>
            <Footer movieImage={movieImage} movieTitle={movieTitle}/>
        </>
    )
}

const Session = styled.ul`
    margin-left: 25px;
    margin-bottom: 150px;
    li div{
        margin-bottom: 25px;
    }
    li div span{
        font-family: 'Roboto';
        font-size: 20px;
        color: #293845;
    }

    li ul{
        display: flex;
        margin-bottom: 25px;
    }
    li ul li{
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto';
        color:#fff;
        font-size: 18px;
        background-color: #E8833A;

        height: 45px;
        width: 85px;
        margin-right: 10px;
        border-radius: 3px;
        text-decoration: none;
        transition: all 0.3s;
    }
    li ul li:hover{
        filter: brightness(110%);
    }
    li ul li a{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #fff;
    }
`