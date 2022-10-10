import { useState } from 'react'
import styled from "styled-components"

export default function Seat({ seat, selectedSeats, setSelectedSeats }) {

    const [selected, setSelected] = useState(false);

    function verifySeat(){
        if( seat.isAvailable && !selected){
            setSelectedSeats([...selectedSeats, seat.id]);
            setSelected(true);
        }
        else{
            const newArray = selectedSeats.filter((SelectedSeat) => 
            SelectedSeat !== seat.id);
            setSelected(false);
            setSelectedSeats(newArray);
        }
    }

    return (
        <StyledSeat seat={seat}
            selected={selected}
            onClick={verifySeat}>
            {seat.name}
        </StyledSeat>
    )
}

const StyledSeat = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 8px;
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
        (props.selected) ?
            '#1AAE9E' : (props.seat.isAvailable) ?
                '#C3CFD9' : '#FBE192'};
`