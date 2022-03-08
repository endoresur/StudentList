import styled from "styled-components";

const Container = styled.div`
  position: relative;
  justify-content: ${props => props.jc || ''};
  align-items: ${props => props.ai || 'center'};

  margin: 
    ${props => props.mt || 'auto'}
    ${props => props.mr || '130px'}
    ${props => props.mb || 'auto'}
    ${props => props.ml || '130px'}
`

const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const HeaderContainer = styled.header`
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

export {Container, FlexContainer, HeaderContainer, TextContainer};