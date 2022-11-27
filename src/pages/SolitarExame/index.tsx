import { Footer } from "../../components/footer";
import { Container } from "./style";
import image from '../../assets/dna.png'


export function SolitarExame(){
    return(
        <Container>
            <h1>Solitação Exame</h1>
            <form>
                <img src={image} alt="" />
                <p>Exame Solicitado</p>
                <input type="text" />
                <p>Justificativa</p>
                <input type="text" />
                <p>Observçôes</p>
                <input type="text" />
                <button>Salvar</button>
                <button>Gerar Comprovante</button>
            </form>

            <Footer/>
        </Container>
    )
}