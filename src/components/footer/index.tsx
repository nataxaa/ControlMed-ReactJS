import { Container } from "./style";
import icon1 from '../../assets/footer-1.png'
import icon2 from '../../assets/footer-pencil.png'
import icon3 from '../../assets/footer-doctor.png'
import {Link} from 'react-router-dom'

export function Footer(){
    return(
        <Container>

                <Link className="link-footer" to={'/SolicitarExame'}>
                <div className="footer-icon">
                    <img className="icon" src={icon1} alt="" />
                    <p>Fazer Solicitção de Exames</p>
                </div>
                </Link>
                <Link className="link-footer" to={'/Contrarreferencia'}>
                <div className="footer-icon">
                    <img className="icon" src={icon2} alt="" />
                    <p>Inserir Contrarreferência</p>
                </div>
                </Link>
                    <Link className="link-footer" to={'/HistoricoMedico'}>
                <div className="footer-icon">
                    <img className="icon" src={icon3} alt="" />
                    <p>Visualizar Histórico Médico</p>
                </div>
                    </Link>
            
        </Container>
    )
}