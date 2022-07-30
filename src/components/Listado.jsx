import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Listado = () => {
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=660f0ca35415ef05ecdf4390fab6ac9d&language=es-ES&sort_by=popularity.desc";
    axios.get(endPoint).then((response) => {
      const apiData = response.data;
      setMoviesList(apiData.results);
    });
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        {moviesList.map((oneMovie, i) => {
          return (
            <div className="col-3" key={i}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}...
                  </p>
                  <Link to="/" className="btn btn-primary">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listado;
