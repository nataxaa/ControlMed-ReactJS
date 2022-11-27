import styled from 'styled-components'

export const Container = styled.div`

border-radius:6px ;
    text-align:center ;
    width:25rem ;
    background-color:var(--green-color) ;
    margin: 2.5rem auto ;

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
        li{
            list-style:none ;
            display:flex ;
            justify-content:space-between ;
            margin-bottom:4px ;
            button{
                background-color:var(--button-color);
                border:none ;
                padding:3px 20px;
                border-radius:5px ;
                color:#FFF ;
                cursor: pointer;
                :hover{
                    opacity:0.9 ;
                }
            }
        }
    }

`