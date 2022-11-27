import styled from 'styled-components'

export const Container = styled.div`

border-radius:6px ;
    text-align:center ;
    width:25rem ;
    background-color:var(--green-color) ;
    margin: 2.5rem auto ;
    
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
        img{
            width:4.3rem ;
            margin: 0 auto 1rem ;
        }
        p{
            width:fit-content ;
        }
        span{
            padding:10px ;
            background-color: #FFF;
            margin-bottom:10px ;
            border-radius:5px ;
        }

        div{
            display:grid ;
            grid-template-columns:1fr 1fr ;
            gap:10px;
        }
        button{
                margin-top:2.5rem ;
                background-color:var(--button-color) ;
                padding:10px 15px ;
                border:none ;
                border-radius:5px ;
                cursor: pointer;
                color:#FFF ;
                :hover{
                    opacity:0.9 ;
                }
                
            }
    }


`