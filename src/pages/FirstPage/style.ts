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

    p.subtitle{
        margin-top:6rem ;
        color:#FFF ;
    }

    div.buttons{

        display:grid ;
        grid-template-columns: 1fr 1fr ;
        margin: 0.5rem 2rem 2.5rem ;
        gap:10px;
        button{
            background-color:#FFF ;
            border:none ;
            padding: 1rem 0.5rem 3rem ;
            border-radius:6px ;
            :hover{
                opacity: 0.8 ;
                cursor: pointer;
            }
            img{
                width:4rem ;
            }
            p{
                font-size:11px ;
                color:var(--green-color) ;
            }
        }
    }

    footer{
        background-color:#FFF ;
        height:2rem ;
    }

`