import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin-top: 80px;
  
  background-color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);  
  border-spacing: 10px;
  
  tr { // строчка
    vertical-align: middle;
  }
  
  th { // заголовок
    width: auto;
    position: relative;
    top: -50px;
    text-align: start;
    
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  td { // ячейка    
    white-space: normal;
    position: relative;
    top: -20px;
    padding-bottom: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;

    &:first-child{   
      width: 50px;
      padding-left: 15px;
    }
    
    &:last-child{
      width: 180px;
      padding-right: 20px;
    }
  }
`

export {Table};