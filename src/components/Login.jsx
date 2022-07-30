import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swAlert(<h2>Los campos no pueden estar vacíos.</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swAlert(
        <h2>Debes escribir una dirección de correo electrónico válida.</h2>
      );
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>Credenciales inválidas</h2>);
      return;
    }

    console.log("Ok estamos listos para enviar la información.");

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swAlert(<h2>Perfecto, Igresaste correctamente.</h2>);
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/listado");
      });
  };
  const token = localStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/listado" />}
      <div className="container">
        <h2>Forlumario de Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="">
            <span>Correo Electronico</span> <br />
            <input className="form-control" type="text" name="email" />
          </label>
          <br />
          <label htmlFor="">
            <span>Contraseña</span>
            <br />
            <input className="form-control" type="password" name="password" />
          </label>
          <br />
          <button className="btn btn-success mt-2">Ingresar</button>
        </form>
      </div>
    </>
  );
};

export default Login;
