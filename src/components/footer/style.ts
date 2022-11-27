import styled from 'styled-components'

export const Container = styled.footer`

    background-color:#FFF ;
        display:grid ;
        grid-template-columns:1fr 1fr 1fr ;
        padding:7px ;
        
        img.icon{
            width:1.5rem ;
            height:fit-content ;
            background-color:#FFF ;
        }
        p{
           font-size:10px ;
        }
        div.footer-icon{
            display:flex ;
            flex-direction:column ;
            align-items:center ;
        }
        .link-footer{
            text-decoration:none ;
            color:#000 ;
        }

`