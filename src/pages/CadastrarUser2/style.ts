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
            font-size:16px ;
            color:var(--green-color) ;
        }

        div.input-display{
            display:flex ;
            justify-content:space-between ;
            gap:20px;
            div{
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                input{
                    width:3rem ;
                }
            }
        }

        div.input-display-2{
            display:grid ;
            grid-template-columns:3fr 1fr ;
            div{
                display:flex ;
                flex-direction:column ;
                text-align:left ;
                input{
                    width:4rem ;
                }
                input.bairro{
                    width:9rem ;
                }
            }
        }
    }

    button{
        
        width:8rem ;
        margin: 2rem auto ;
        padding:8px 20px;
        background-color:var(--button-color) ;
        color:#FFF ;
        border:none ;
        border-radius:5px ;
        margin-bottom:2rem ;
        cursor: pointer;
        :hover{
            opacity:0.9 ;
        }
    }

    
    footer{
        background-color:#FFF ;
        height:2rem ;
    }

`