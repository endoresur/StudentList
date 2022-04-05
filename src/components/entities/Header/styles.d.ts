import styled from "styled-components"

export const HeaderRoot = styled.header`
  width: 100%;
  height: 85px;  
  
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  
  background-color: #FFFFFF;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`

export const Title = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;  
  justify-content: start;
  align-items: center;
  flex-direction: row;
`

export const LogoIcon = styled.div<{isMobile: boolean}>`
  position: relative;
  width: 42px;
  height: 42px;  
  margin-right: ${props => props.isMobile ? '26px': '45px'};
  
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