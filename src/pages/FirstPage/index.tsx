import { Form } from "../../style/global";
import { Container } from "./style";
import logo from '../../assets/logo.png'
import img1 from '../../assets/conversation.png'
import img2 from '../../assets/document.png'
import {Link} from 'react-router-dom'

export function FirstPage(){
    return(
        <Container>
            <img src={logo} alt="logo da aplicação" />
            <h1>Integra <span>Saúde</span></h1>
            <p className="subtitle">O que voçê deseja ?</p>
            <div className="buttons">
                <button>
                    <Link className="link" to={'/consultaPaciente'}>
                        <img src={img1} alt="" />
                        <p >Consultar Pacientes</p>
                    </Link>
                </button>
                <button>
                    <img src={img2} alt="" />
                    <p >Relatórios</p>
                </button>
            </div>
            <footer>

            </footer>
        </Container>
    )
}