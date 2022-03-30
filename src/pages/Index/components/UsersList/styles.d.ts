import styled from "styled-components"

export const UserListRoot = styled.div`
    width: 100%;
    height: auto;
    margin-top: 36px;

    //background-color: aliceblue;
`

export const UserItemsContainer = styled.div`
    background-color: ${props => props.isMobile? 'rgb(0)' : '#fff'};
    border-radius: 6px;
    padding: ${props => props.isMobile? '0' : '26px 0 5px 0'};
`

export const NotFoundTitle = styled.span`
    display: inline-block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    text-align: center;
`