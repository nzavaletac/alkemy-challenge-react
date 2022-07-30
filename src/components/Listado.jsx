import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Listado = () => {
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=660f0ca35415ef05ecdf4390fab6ac9d&language=es_ES&sort_by=popularity.desc";
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      setMoviesList(apiData.results);
    });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listado;
