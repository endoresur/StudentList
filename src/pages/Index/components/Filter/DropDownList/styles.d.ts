import styled from "styled-components"

export const DropDownListRoot = styled.div`
    min-width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;

    background-color: white;
    border: none;
    border-radius: 6px;
    box-shadow: 0 7px 64px rgba(0, 0, 0, 0.2);
`

export const Line = styled.div`
    width: auto;    

    display: flex;    
    justify-content: space-between;
    align-items: center;
    
    padding: 12px 14px 12px 10px;
    margin: 5px;
    border-radius: 5px;
    
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    
    &:hover{
        background-color: rgba(73, 194, 232, 0.11);
    }
`