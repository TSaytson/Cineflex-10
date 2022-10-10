import {useState} from 'react'
import styled from "styled-components"

export default function Seat({seat}){

    const [selected, setSelected] = useState(false);

    return (
        <StyledSeat seat={seat} 
        selected={selected} 
        onClick={() => {
            console.log(selected);
        seat.isAvailable ? 
        setSelected(!selected) : ''}} >
            {seat.name}
        </StyledSeat>
    )
}

const StyledSeat = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    margin-bottom: 20px;
    
    width: 26px;
    height: 26px;

    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 50%;
    font-family: 'Roboto';
    font-size: 11px;
    color: black;
    cursor: pointer;
    background-color:${(props) =>
    (props.seat.isAvailable) ? 
    '#C3CFD9' : (props.selected) ? 
    '#1AAE9E' : '#FBE192'};
`