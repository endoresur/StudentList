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

const AvatarIcon = styled.img`
  height: 40px;
  width: 40px;

  border-radius: 50%;
`

const ColorCircle = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;
  
  background-color: ${props => colors.get(props.bc) || ''};  
  border-radius: 15px;
`

const TrashIcon = styled.div`
  height: 30px;
  width: 30px;
  
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 0 0 16.3715px rgba(0, 0, 0, 0.1);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-height: 15px;
    max-width: 15px;    
    border-radius: 0;
  }
  
`

export {LogoIcon, ColorCircle, TrashIcon, AvatarIcon};
