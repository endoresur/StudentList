import styled from "styled-components"
import colors from "../../../constants/colors"

export const ColorCircleRoot = styled.div`
    height: ${props => props.mini? '12px' : '30px'};
    width: ${props => props.mini? '12px' : '30px'};
    
    background-color: ${props => colors.get(props.bc) || 'black'};  
    border-radius: 15px;
`