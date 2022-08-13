import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./css/bootstrap.min.css";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
function App() {
  return (
    <>
      <Header />
      <div className="container mt-2">
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
