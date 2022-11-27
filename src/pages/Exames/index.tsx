import { Container } from "./style";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import perfil from '../../assets/perfil.jpg'

export function Exames(){

const {name} = useParams();

    return(
        <Container>
            <h1>Exames Realizados</h1>
            <form>
                <img src={perfil} alt="" />
                <p>Exame Realizado: </p>
                <span>{name}</span>
                <p>Profissional Responsável:</p>
                <span>Escolher</span>
                <p>Data:</p>
                <span>Escolher</span>

                <div>
                    <button>Vizualizar Exame</button>
                    <button>Vizulizar Laudo</button>
                </div>
                
               <Link to={'/HistoricoMedico'}> 
                    <button className="back">Voltar</button>
               </Link> 
            </form>


            <Footer/>
        </Container>

    )
}