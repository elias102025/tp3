import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
