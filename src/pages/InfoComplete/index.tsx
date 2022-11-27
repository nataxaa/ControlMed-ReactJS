import { Container } from "./style";
import icon1 from '../../assets/footer-1.png'
import icon2 from '../../assets/footer-pencil.png'
import icon3 from '../../assets/footer-doctor.png'
import { Footer } from "../../components/footer";
import perfil from '../../assets/perfil.jpg'

export function InfoComplete(){
    return(
        <Container>
            <h1>Ficha Pessoal</h1>
            <form>
                <img src={perfil} alt="" />
                <p>Telefone:</p>
                <span>(85)00000-0000</span>
                <p>Data de Nascimento:</p>
                <span>12/12/2000</span>
                <p>Cpf:</p>
                <span>000.000.000.-00</span>
                <p>CNS:</p>
                <span>00000000000</span>
                <p>Nome da Mãe</p>
                <span>maria de oliveira</span>
            </form>
           
           <Footer/>
        </Container>
    )
}