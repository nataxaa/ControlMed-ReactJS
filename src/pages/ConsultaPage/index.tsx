import { Container } from "./style";
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'


export function ConsultaPage(){
    return(
        <Container>
            <img src={logo} alt="" />
            <h1>Integra <span>Saúde</span></h1>
            <form>
                <label>Nome:</label>
                <input type="text" />
                <label>Cpf:</label>
                <input type="text" />
                <label>Data de Nascimento:</label>
                <input type="text" />
                <div className="buttons">
                        <Link className="link-novo" to={'/FichaPessoal'}>
                            <button>
                                Consultar
                            </button>
                        </Link>
                        <Link className="link-novo" to={'/'}>
                            <button>
                                Voltar
                            </button>
                        </Link>
                </div>
                <Link className="link-cadastro" to={'/CadastroUser'}>Fazer Cadastro.</Link>
            </form>
            <footer>

            </footer>
        </Container>
    )
}