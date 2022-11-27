import { Container } from "./style";
import image from '../../assets/footer-pencil.png'
import { Footer } from "../../components/footer";
import {Link} from 'react-router-dom'

export function Contrarreferencia(){
    return(
        <Container>
            <h1>Contrarreferência</h1>
            <form>
                <img src={image} alt="" />
                <input type="text" placeholder="Insira aqui a Contrarreferência...."/>
                <p>Encaminhamento</p>
                <input className="second-input" type="text" />
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