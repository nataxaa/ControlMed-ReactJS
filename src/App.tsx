import { FirstPage } from "./pages/FirstPage";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ConsultaPage } from "./pages/ConsultaPage";
import { FichaPessoal } from "./pages/FichaPessoal";
import { InfoComplete } from "./pages/InfoComplete";
import { HistoricoMedico } from "./pages/HistoricoMedico";
import { Exames } from "./pages/Exames";
import { Consultas } from "./pages/Consultas";
import { Contrarreferencia } from "./pages/Contrarreferencia";
import { PlanoTerapeutico } from "./pages/PlanoTerapeutico";
import { SolitarExame } from "./pages/SolitarExame";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/consultaPaciente" element={<ConsultaPage/>}/>
          <Route path="/FichaPessoal" element={<FichaPessoal/>}/>
          <Route path="/FichaCompleta" element={<InfoComplete/>}/>
          <Route path="/HistoricoMedico" element={<HistoricoMedico/>}/>
          <Route path="/Exames/:name" element={<Exames/>}/>
          <Route path="/Consulta/:name" element={<Consultas/>}/>
          <Route path="/Contrarreferencia" element={<Contrarreferencia/>}/>
          <Route path="/PlanoTerapeutico" element={<PlanoTerapeutico/>}/>
          <Route path="/SolicitarExame" element={<SolitarExame/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
