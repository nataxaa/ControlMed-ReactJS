import { Container } from "./style";
import img from '../../assets/logo.png'
import { Footer } from "../../components/footer";
import { useState } from "react";
import {Link} from 'react-router-dom'

export function CadastrarUser(){

    const [nome, setNome] = useState<string>()
    const [cpf, setCpf] = useState<number>()
    const [data_nascimento, setData_nascimento] = useState<string>()
    const [nome_pai, setNome_pai] = useState<string>()
    const [nome_mae, setNome_mae] = useState<string>()
    const [cns, setCns] = useState<number>()
    const [telefone, setTelefone] = useState<number>()

    
    
    return(
        <Container>
            <h1>Tela de Cadastro</h1>
            <img src={img} alt="" />
            <form>
                <label>Nome:</label>
                <input
                 type="text" 
                 placeholder="Digite seu nome completo..." 
                 value={nome}
                 onChange={(e)=>setNome(e.target.value)}
                 />
                <label>CPF:</label>
                <input 
                 type="number" 
                 placeholder="Digite seu CPF..." 
                 value={cpf}
                 onChange={(e)=>setCpf(e.target.valueAsNumber)}
                    />
                <label>Data de Nascimento:</label>
                <input
                 type="text" 
                 placeholder="Digite sua data nascimento..." 
                 value={data_nascimento}
                 onChange={(e)=>setData_nascimento(e.target.value)}
                 />
                <label>Nome Mãe:</label>
                <input
                 type="text" 
                 placeholder="Digite o nome da sua mãe..." 
                 value={nome_pai}
                 onChange={(e)=>setNome_pai(e.target.value)}
                 />
                <label>Nome Pai:</label>
                <input
                 type="text" 
                 placeholder="Digite o nome do seu pai..." 
                 value={nome_mae}
                 onChange={(e)=>setNome_mae(e.target.value)}
                 />
                <label htmlFor="">CNS:</label>
                <input 
                type="number" 
                placeholder="Digite seu CNS aqui..."
                value={cns}
                onChange={(e)=>setCns(e.target.valueAsNumber)}
                />
                <label>Telefone: </label>
                <input 
                type="number"
                placeholder="Digite seu numero de telefone..."
                value={telefone}
                onChange={(e)=>setTelefone(e.target.valueAsNumber)}
                />
            <Link to={'/CadastroUser2'}>
                <button>Continuar</button>
            </Link>
            </form>


            <footer></footer>
        </Container>
    )
}