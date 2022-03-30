import styled from "styled-components"

export const SelectFilterRoot = styled.div`
    position: relative;

    height: 48px;
    width: ${props => props.isMobile ? '50px' : '180px'};
    margin: 0 0 0 17px;
    padding: ${props => props.isMobile ? '' : '0 20px 0 20px'};

    cursor: pointer;

    display: flex;
    justify-content: ${props => props.isMobile ? 'center' : 'space-between'};
    align-items: center;

    background-color: white;
    border: none;
    border-radius: 6px;
    box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);
`

export const ChoiceContainer = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
`