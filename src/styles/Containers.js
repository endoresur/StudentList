import styled from "styled-components";

const Container = styled.div`
  position: relative;
  //justify-content: center;
  align-items: center;
  
  margin: auto 130px auto 130px;
  
`

const FlexContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: row;
`

const HeaderContainer = styled.header`
  height: 85px;
  margin-bottom: 30px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 44px;
  
  background-color: #FFFFFF;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.07);
`

export {Container, FlexContainer, HeaderContainer};