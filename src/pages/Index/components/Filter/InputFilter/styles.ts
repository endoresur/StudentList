import styled from "styled-components"

export const InputFilterRoot = styled.div`
    height: 48px;
    width: 85%;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;

    cursor: pointer;

    background-color: white;
    border: none;
    border-radius: 6px;
    box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);
`

export const InputText = styled.input`
    height: 40px;
    width: 100%;
    margin-left: 15px;

    border: none;
    outline: none;
    border-radius: 6px;

    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;

    font-family: 'Geometria', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`