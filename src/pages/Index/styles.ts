import styled from "styled-components";

export const PageTitle = styled.span<{isMobile: boolean}>`
    display: inline-block;
    margin: 75px 0 47px;
    //margin: 22px 0 40px;
    margin: ${props => props.isMobile ? '40px 0 22px' : '75px 0 47px'};

    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;

`