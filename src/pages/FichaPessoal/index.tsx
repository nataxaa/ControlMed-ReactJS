import { Container } from "./style";
import icon1 from '../../assets/footer-1.png'
import icon2 from '../../assets/footer-pencil.png'
import icon3 from '../../assets/footer-doctor.png'
import {Link} from 'react-router-dom'
import { Footer } from "../../components/footer";
import perfil from '../../assets/perfil.jpg'

export function FichaPessoal(){
    return(
        <Container>
            <h1>Ficha Pessoal</h1>
            <form>
                <img src={perfil} alt="" />
                <p>Nome</p>
                <span>Natan Xavier</span>
                <div className="section">
                    <div className="sub-section">
                        <p>Idade</p>
                        <span>22</span>
                    </div>
                    <div className="sub-section">
                        <p>Sexo</p>
                        <span>M</span>
                    </div>
                </div>
                <p>Cidade</p>
                <span>Fortaleza</span>
                <div className="section">
                    <div className="sub-section">
                        <p>Idade</p>
                        <span>22</span>
                    </div>
                    <div className="sub-section">
                        <p>Sexo</p>
                        <span>M</span>
                    </div>
                </div>
                <p>Bairro</p>
                <span>Centro</span>
                <Link className="link" to={'/fichacompleta'}>
                <button>Ver Informaçôes Completas</button>
                </Link>
            </form>

            <Footer/>

        </Container>
    )
}