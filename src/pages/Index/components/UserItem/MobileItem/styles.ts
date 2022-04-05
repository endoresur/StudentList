import styled from "styled-components"

export const MobileItemRoot = styled.div`
    
`

export const Card = styled.div`
    margin-bottom: 10px;

    background-color: #fff;
    border-radius: 6px;

    display: grid;    
    grid-template-rows: 70px auto;

    border-radius: 6px;
    box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);  

`

export const CardLine = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    align-items: center;

    padding-left: 20px;


    &:first-child{
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
    }   
    
    &:last-child{
        padding: 15px 0 15px 15px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
    }
  
    li::marker {
        color: #49C2E8;
    }
`

export const Container = styled.div`
    width: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`
