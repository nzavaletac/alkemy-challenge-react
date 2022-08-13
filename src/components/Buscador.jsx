import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      swAlert(<h5>Tiene que escribir una palabra clave.</h5>);
    } else if (keyword.length < 2) {
      swAlert(<h5>Tiene que escribir más de 4 caracteres.</h5>);
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/resultados?keyword=${keyword}`);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="d-flex align-items-center">
        <label className="form-label mb-0 mx-2">
          <input
            className="form-control"
            type="text"
            name="keyword"
            placeholder="Escribe una palabra..."
          />
        </label>
        <button className="btn btn-success ml-4">Buscar</button>
      </form>
    </>
  );
};

export default Buscador;
