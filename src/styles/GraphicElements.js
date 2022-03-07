import styled from "styled-components";

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

export {LogoIcon};