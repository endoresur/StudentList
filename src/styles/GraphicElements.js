import styled from "styled-components";
import {colors} from "../types/types";

const LogoIcon = styled.div`
  position: relative;
  width: 42px;
  height: 42px;  
  margin-right: 45px;
  
  border: 5px solid #49C2E8;
  border-radius: 50%;
  
  &:after{
    position: absolute;
    content: '';
    width: 23.02px;
    height: 23.3px;
    
    top: 4.5px;
    left: 4.5px;

    border: 5px solid #49C2E8;
    border-radius: 50%;
  }
`

const ColorCircle = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  
  background-color: ${props => colors.get(props.bc) || ''};  
  border-radius: 15px;
`

export {LogoIcon, ColorCircle};