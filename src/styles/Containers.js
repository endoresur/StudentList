import styled from "styled-components";
import {device} from "../types/types";

const Container = styled.div`
  width: ${props => props.w || ''};
  height: ${props => props.h || ''};
  
  position: relative;
  justify-content: ${props => props.jc || ''};
  align-items: ${props => props.ai || 'center'};
  
  margin-top: ${props => props.mt || '0'};
  margin-right: ${props => props.mr || '0'};
  margin-bottom: ${props => props.mb || '0'};
  margin-left: ${props => props.ml || '0'};
  
  padding: ${props => props.p || ''};   
`

const WrapperContainer = styled(Container)`
  height: 100%;
  margin: 0 130px 0 130px;
  
  @media ${device.desktop} {
    margin: 0 200px 0 200px;
  }
  
  @media ${device.laptopL} {
    margin: 0 130px 0 130px;
  }
  
  @media ${device.laptop} {
    margin: 0 50px 0 50px;
  }
  
  @media ${device.tablet} {
    margin: 0;
  }   
  
  @media ${device.mobileL} {
    background-color: red;    
  }
`

const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const HeaderContainer = styled.header`
  width: 100%;
  height: 85px;
  margin-bottom: 60px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  
  background-color: #FFFFFF;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`

const TextContainer = styled.div`  
  font-style: ${props => props.fStyle || ''};
  font-weight: ${props => props.fWeight || ''};
  font-size: ${props => props.fSize || ''};
  line-height: ${props => props.lh || ''};
`

const InputContainer = styled.div`
  height: 48px;
  width: ${props => props.w || ''};
  padding: ${props => props.p || ''}; 
  margin: ${props => props.m || ''};

  background-color: white;

  border: none;
  border-radius: 6px;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);
`

const ListContainer = styled(InputContainer)`
  position: relative;
  width: 100%;
  height: auto;
`

export {
    Container,
    FlexContainer,
    HeaderContainer,
    TextContainer,
    InputContainer,
    ListContainer,
    WrapperContainer,
};