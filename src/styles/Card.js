import styled from "styled-components";

const Card = styled.table`
  width: 100%;  
  table-layout: fixed;

  background-color: white;
  border: none;
  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: 0 7px 64px rgba(0, 0, 0, 0.007);
  margin-bottom: 10px;
`

const CardLine = styled.tr`
`

const CardHeadCell = styled.th`
  text-align: start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);


  &:first-child{
    text-align: center;
    padding: 15px 0 10px 0;
    width: 77px;
  }

  &:last-child{
    text-align: center;
    width: 50px;
  }
`

const CardBodyCell = styled.td`
  position: relative;

  ul{
    padding-left: 15px;
  }
  
  li::marker {
    color: #49C2E8;
  }
`

export {Card, CardHeadCell, CardBodyCell, CardLine};