import styled from "styled-components"

export const Button = styled.input`
    width: 100%;
    height: 50px;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    border: 1px solid #51b9fa;
    background-color: #51b9fa;
    color: white;
    text-align: center;
    font-size: large;
    font-weight: 700;
    margin-top: 24px;
    :hover{
        background-color: #379ad8;
    }
`

export const ButtonCreateCard = styled.img`
    height: 100px;
    width: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
`