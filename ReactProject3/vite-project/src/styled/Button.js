import styled from "styled-components";

export const Button = styled.button`
padding:10px 18px;
background-color: black;
color: white;
font: 16px;
border-radius: 5px;
min-width: 220px;
border: none;
border-color: 1px solid transparent;


&:hover{
  cursor: pointer;
  background-color: white;
  border: 1px solid black;
  color:black;
  transition: 0.4s background ease-in;
}
`


export const OutlineButton = styled(Button)`
background-color: white;
border:1px solid black;
color: black;
&:hover{
  cursor: pointer;
  background-color: black;
  border: 1px solid transparent;
  color:white;
}
`