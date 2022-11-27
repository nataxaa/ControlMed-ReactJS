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
        background-color: #E9ECEF ;
        margin: 2rem ;
        border-radius:5px ;
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        padding:20px ;
        color: var(--green-color);

        input{
            width:100% ;
            margin-top:3rem ;
            height:6rem ;
            background-color:var(--input-color) ;
            border:none ;
            border-radius:5px ;
            ::placeholder{
                color:#000 ;
                opacity:0.7 ;
            }
            padding-left:5px ;
        }
        
        input.second-input{
            height:3rem ;
            margin-top:0 ;
            margin-bottom:2rem ;
        }
        p{
            width:fit-content ;
            color:#000 ;
            font-size:20px ;
            margin-top:1rem ;
            margin-left:-9rem ;
        }
        img{
            width:4rem ;
        }
        span{
            padding:10px ;
            background-color: var(--input-color);
            margin-bottom:10px ;
            border-radius:5px ;
            width:100% ;
            height:1.3rem ;
            
        }
        div{
            display:flex ;
            justify-content:space-between ;
            gap:2rem;
        }
        button{
            background-color:var(--button-color) ;
            color:#FFF ;
            border:none ;
            border-radius: 5px;
            padding:12px 20px ;
            margin-bottom:2rem ;
            cursor: pointer;
            :hover{
                opacity:0.9 ;
            }
        }
    }

`