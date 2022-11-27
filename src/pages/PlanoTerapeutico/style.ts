import styled from 'styled-components'


export const Container = styled.div`

border-radius:6px ;
    text-align:center ;
    width:25rem ;
    background-color:var(--green-color) ;
    margin: 2.5rem auto ;
    
    img.icon-pencil{
        width:4rem ;
        margin: 0rem auto 2rem ;
    }

    h1{
        font-size:30px ;
        span{
            color:var(--button-color) ;
        }
    }

    form{
        background-color: var(--form-color) ;
        margin: 2rem ;
        border-radius:5px ;
        display:flex ;
        flex-direction:column ;
        padding:20px ;
        color: var(--green-color);

        p{
            font-size: 20px;
            color:#000 ;
            text-align:left ;
        }

        input{
            background-color:var(--input-color) ;
            border:none ;
            height:2.5rem ;
            margin-bottom:1rem ;
            border-radius:5px ;
            padding-left:5px ;
            ::placeholder{
                color:#000 ;
                opacity:0.7 ;
            }
        }

    }
`