import { Footer } from "../../components/footer";
import { Container } from "./style";
import {Link} from 'react-router-dom'
import perfil from '../../assets/perfil.jpg'

export function HistoricoMedico(){
    return(
        <Container>
            <h1>Histórico Médico</h1>
            <form>
                <img src={perfil} alt="" />
                <p>Nome:</p>
                <span>Natan Xavier</span>
                <p>Comorbidades: </p>
                <span>Diabetes</span>
                <p>Remédios</p>
                <span>Metformina/Furosemida</span>
                <p>Consultas Anteriores: </p>
                <span>
                    <ul>
                        <li>Gastroenterologia - 20.05.22 <Link to={`/Exames/${'gastrologia'}`}><button>Ver</button></Link></li>
                        <li>Proctologista - 10.05.22 <Link to={`/Exames/${'Proctologista'}`}><button>Ver</button></Link></li>
                    </ul>
                </span>
                <p>Exames Anteriores: </p>
                <span>
                    <ul>
                        <li>Laboratoriais - 20.05.22 <Link to={`/Consulta/${'Laboratoriais'}`}><button>Ver</button></Link></li>
                        <li>Endoscopia - 19.05.22 <Link to={`/Consulta/${'Endoscopia'}`}><button>Ver</button></Link></li>
                    </ul>
                </span>
            </form>

            <Footer/>
        </Container>

    )
}