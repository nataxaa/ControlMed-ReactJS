import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
  --green-color: #3D9B41;
  --button-color: #D73A3A;
  --form-color: #E9ECEFB2;
  --h1-color: #FFF;
  --text-color: #000;
  --input-color: #7F7F76;
}


*{
  margin: 0 ;
  padding: 0  ;
}

body{
  background-color: #000 ;
  font-family: 'Jost', sans-serif;
  h1{
    color: var(--h1-color) ;
  }
}

.link{
  text-decoration:none ;
}

`

export const Container = styled.div`
  border-radius:6px ;
    text-align:center ;
    width:20rem ;
    background-color:var(--green-color) ;
    margin: 2.5rem auto ;
`

export const Form = styled.form`

  width:15rem ;
  background-color:var(--farm-color) ;



`