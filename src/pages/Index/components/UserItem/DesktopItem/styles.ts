import styled from "styled-components"

export const DesktopItemRoot = styled.div`
    width: 100%;
    height: auto;
`

export const DesktopItemLine = styled.div`
    width: auto;
    height: 40px;
    margin: 0 0 24px 20px;

    display: grid;
    grid-template-columns: 0.3fr 1.3fr 1.7fr 0.7fr 0.5fr 0.5fr 0.3fr 0.3fr;
`

export const Cell = styled.span`
    display: flex;
    justify-items: start;
    align-items: center;
`