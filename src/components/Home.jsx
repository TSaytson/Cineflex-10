import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Topbar from '../assets/Topbar'
import Loader from '../assets/Loader';

export default function Home() {
    const [movies, setMovies] = useState(null);
    const moviesURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

    useEffect(() => {
        const promise = axios.get(moviesURL);

        promise.then((response) => setTimeout(() => setMovies(response.data), 1000));
    }, []);

    if (!movies)
        return <Loader/>


    return (
        <>
            <Topbar>o filme</Topbar>
            <MovieList>
                {movies.map((movie, index) =>
                    <li key={index}>
                        <img src={movie.posterURL}></img>
                    </li>)}
            </MovieList>
        </>
    )
}

const MovieList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        width: 145px;
        height: 210px;
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 5px 15px;
        cursor: pointer;
    }
    img{
        width: 90%;
        height: 90%;
    }
`

