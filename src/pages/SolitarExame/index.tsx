import { Footer } from "../../components/footer";
import { Container } from "./style";
import image from '../../assets/dna.png'
import { useState } from "react";


export function SolitarExame(){

    const [nomeExame, setNomeexame] = useState<string>()
    const [justificativa, setJustificativa] = useState<string>()
    const [observacoes, setObservacoes] = useState<string>()

    return(
        <Container>
            <h1>Solitação Exame</h1>
            <form>
                <img src={image} alt="" />
                <p>Exame Solicitado</p>
                <input
                 type="text"
                 placeholder="Digite o nome do exame..."
                 value={nomeExame}
                 onChange={(e)=>setNomeexame(e.target.value)}
                 />
                <p>Justificativa</p>
                <input 
                type="text" 
                placeholder="Digite uma justificativa..."
                value={justificativa}
                onChange={(e)=>setJustificativa(e.target.value)}
                />
                <p>Observçôes</p>
                <input 
                type="text"
                placeholder="Digite uma Observação..."
                value={observacoes}
                onChange={(e)=>setObservacoes(e.target.value)}
                />
                <button>Salvar</button>
                <button>Gerar Comprovante</button>
            </form>

            <Footer/>
        </Container>
    )
}