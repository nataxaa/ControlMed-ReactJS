import { Container } from "./style";
import image from '../../assets/footer-pencil.png'
import { Footer } from "../../components/footer";
import { useState } from "react";


export function PlanoTerapeutico(){

    const [queixaPrincipal, setQueixaPrincipal] = useState<string>()
    const [descriConduta, setDescriConduta] = useState<string>()
    const [pacienteAmbulancia, setPacienteAmbulancia] = useState<string>()
    const [tempoRetorno, seTempoRetorno] = useState<string>()
    
    

    return(
        <Container>
            <h1>Plano Terapêutico</h1>
            <form>
                <img className="icon-pencil" src={image} alt="" />
                <p>Queixa Principal: </p>
                <input type="text" placeholder="Descreva as queixas relatadas pelo paciente..."/>
                <p>Descrição da conduta ambulatorial</p>
                <input type="text" placeholder="Tratamento Aumbulatorial..."/>
                <p>Paciente em alta ambulatorial?</p>
                <input type="text" placeholder="Medicamentos a utilizar..." />
                <input type="text" placeholder="Orientações para tratamentos patológico" />
                <p>Tempo de retorno ambulatorial</p>
                <input type="text" placeholder="Insira aqui o prazo de retorno...." />

            </form>
            
            <Footer/>
        </Container>
    )
}