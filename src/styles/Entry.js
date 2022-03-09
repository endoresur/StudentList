import styled from "styled-components";

const Entry = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: flex-start;
  
  height: 40px;
  margin: 25px 20px 25px 20px;  
    
    img {
      height: 40px; 
      width: 40px;      
      
      border-radius: 50%;
      
      &:after {
        content: 'm';
        height: 38px;
        width: 38px;
        border: 2px solid rgba(0, 0, 0, 0.1);
      }
    }
`

export {Entry};