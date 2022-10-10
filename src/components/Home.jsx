import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

import Loader from '../assets/Loader';
import Select from '../assets/Select';

export default function Home() {
    const [movies, setMovies] = useState(null);
    const moviesURL = 'https://mock-api.driven.com.br/api/v5/cineflex/movies';

    useEffect(() => {
        const promise = axios.get(moviesURL);

        promise.then((response) =>
            setTimeout(() => setMovies(response.data), 1000));
        promise.catch((error) => {
            console.log(error);
        })
    }, []);

    if (!movies)
        return <Loader />


    return (
        <>
            <Select>Selecione o filme</Select>
            <MovieList>
                {movies.map((movie, index) =>
                    <li key={index}>
                        <Link key={index} to={`/movie/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.overview}></img>
                        </Link>
                    </li>
                )}
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
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        width: 145px;
        height: 210px;
        box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        margin: 5px 15px;
        transition: all .3s;
    }

    img{
        position: absolute;
        top:12px;
        left:8px;
        width: 88%;
        height: 88%;
        transition: all .3s;
    }
    li:hover{
        img{
            transform: scale(1.1);
            filter: opacity(.85);
        }
    }

    a{
        width: 100%;
        height: 100%;
    }
`

