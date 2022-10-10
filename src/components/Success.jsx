import styled from "styled-components"
import Select from "../assets/Select"

export default function Success() {
    return (
        <>
            <Select success={true}>
                Pedido feito
                    com sucesso!
            </Select>
        </>
    )
}
