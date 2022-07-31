import { Navigate } from "react-router-dom";

const Detalle = () => {
  const token = sessionStorage.getItem("token");
  return (
    <>
      {!token && <Navigate to="/" />}
      <h2>Este es el detalle</h2>
    </>
  );
};

export default Detalle;
