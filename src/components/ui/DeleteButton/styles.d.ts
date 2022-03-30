import styled from "styled-components"

export const DeleteIconRoot = styled.button`
  height: 30px;
  width: 30px;
  
  background-color: #FFFFFF;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 16.3715px rgba(0, 0, 0, 0.10);

  cursor: pointer;
  
  &:hover {
    box-shadow: 0 0 16.5px rgba(0, 0, 0, 0.15);
  }
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-height: 15px;
    max-width: 15px;    
    border-radius: 0;
  }
`