import { Container } from "./style";
import image from '../../assets/footer-pencil.png'
import { Footer } from "../../components/footer";
import {Link} from 'react-router-dom'
import { useState } from "react";

export function Contrarreferencia(){

    const [informacoes, setInformacoes] = useState<string>()
    const [observacao, setObservacoes] = useState<string>()

    return(
        <Container>
            <h1>ContrarreferĂȘncia</h1>
            <form>
                <img src={image} alt="" />
                <input 
                type="text" 
                placeholder="Insira aqui a ContrarreferĂȘncia...."
                value={informacoes}
                onChange={(e)=>setInformacoes(e.target.value)}
                />
                <p>Encaminhamento</p>
                <input 
                className="second-input" 
                type="text" 
                value={observacao}
                onChange={(e)=>setObservacoes(e.target.value)}
                />
                <div>
                    <button>salvar</button>
                   <Link to={'/PlanoTerapeutico'}><button>Plano TerapĂȘutico</button></Link>
                </div>
                <button>Gerar ContrarreferĂȘncia</button>
            </form>

            <Footer/>
        </Container>
    )
}