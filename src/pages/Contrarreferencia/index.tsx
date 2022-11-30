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
            <h1>Contrarreferência</h1>
            <form>
                <img src={image} alt="" />
                <input 
                type="text" 
                placeholder="Insira aqui a Contrarreferência...."
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
                   <Link to={'/PlanoTerapeutico'}><button>Plano Terapêutico</button></Link>
                </div>
                <button>Gerar Contrarreferência</button>
            </form>

            <Footer/>
        </Container>
    )
}