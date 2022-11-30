import { useState } from "react";
import { Container } from "./style";
import img from '../../assets/logo.png'

export function CadastrarUser2(){

    const [cidade, setCidade] = useState<string>()
    const [uf, setUf] = useState<string>()
    const [sexo, setSexo] = useState<string>()
    const [bairro, setBairro] = useState<string>()
    const [numero, setNumero] = useState<number>()
    const [logradouro, setLogradouro] = useState<string>()
    const [ubs, setUbs] = useState<string>()

    return(
        <Container>
            <h1>Tela de Cadastro</h1>
            <img src={img} alt="" />
            <form>

            <label>Cidade:</label>
            <input 
            type="text"
            placeholder="Digite sua Cidade..."
            value={cidade}
            onChange={(e)=>setCidade(e.target.value)}
            />
            <div className="input-display">
                <div>
                    <label>UF:</label>
                    <input 
                    type="text" 
                    value={uf}
                    onChange={(e)=>setUf(e.target.value)}
                    />
                </div>
                <div>
                <label>Sexo: </label>
                    <input 
                    type="text" 
                    value={sexo}
                    onChange={(e)=>setSexo(e.target.value)}
                    />
                </div>
            </div>
            
            <label>Logradouro: </label>
            <input 
            type="text" 
            value={logradouro}
            onChange={(e)=>setLogradouro(e.target.value)}
            placeholder='Digite seu logradouro...'
            />

            <div className="input-display-2">
                <div>
                    <label>Bairro:</label>
                    <input 
                    className="bairro"
                    type="text" 
                    value={bairro}
                    onChange={(e)=>setBairro(e.target.value)}
                    />
                </div>
                <div>
                <label>Numero:</label>
                    <input 
                    type="number" 
                    value={numero}
                    onChange={(e)=>setNumero(e.target.valueAsNumber)}
                    />
                </div>
            </div>
            
            <label>UBS: </label>
            <input 
            type="text" 
            placeholder="Digite seu UBS aqui..."
            value={ubs}
            onChange={(e)=>setUbs(e.target.value)}
            />
            
            <button>Confirmar</button>

            </form>

            

            <footer></footer>

        </Container>
    )
}