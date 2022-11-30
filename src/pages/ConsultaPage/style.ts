import styled from 'styled-components'

export const Container = styled.div`

    border-radius:6px ;
    text-align:center ;
    width:25rem ;
    background-color:var(--green-color) ;
    margin: 2.5rem auto ;
    img{
        margin-top:2rem ;
        width:10rem ;
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
        input{
            padding:10px ;
            margin-bottom:8px ;
            border-radius:7px ;
            border:none ;
        }
        label{
            width:fit-content ;
            font-size:14px ;
            color:var(--green-color) ;
        }
        button{
            .link-novo{
                color:#FFF ;
                text-decoration: none;
            }
            color:#FFF ;
            margin-top:20px ;
            padding:8px ;
            margin-right:8px ;
            background-color:var(--button-color) ;
            border-radius:5px ;
            cursor: pointer;
            border:none ;
            :hover{
                opacity:0.9 ;
            }
        }

        .link-cadastro{
            margin-top:20px ;
            font-size:15px ;
        }
    }

    
    footer{
        background-color:#FFF ;
        height:2rem ;
    }

`