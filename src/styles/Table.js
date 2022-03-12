import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  position: relative;

  background-color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);
  
  margin-top: 70px;
  
  tr { // строчка
    vertical-align: middle;
  }
  
  th { // заголовок
    width: auto;
    position: relative;
    top: -40px;
    text-align: start;
    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  td { // ячейка
    width: 26%;
    position: relative;
    top: -20px;      
    
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    
    &:first-child{      
      width: 50px;
    }
    
    //background-color: blueviolet;
  }
`

export {Table};