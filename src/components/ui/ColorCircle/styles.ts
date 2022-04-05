import styled from "styled-components"
import colors, { ColorTypes } from "../../../constants/colors"

export const ColorCircleRoot = styled.div<{ isMobile?: boolean, color: ColorTypes }>`
    height: ${props => props.isMobile ? '12px' : '30px'};
    width: ${props => props.isMobile ? '12px' : '30px'};
    
    background-color: ${props => colors.get(props.color) || 'black'};  
    border-radius: 15px;
`