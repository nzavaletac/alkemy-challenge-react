import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resultados = ({ addOrRemoveFromFavs }) => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  

  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=660f0ca35415ef05ecdf4390fab6ac9d&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviesArray = response.data.results;
        setMoviesResults(moviesArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [keyword, moviesResults]);

  return (
    <>
      <h2>
        Resultados para: <em>{keyword}</em>
      </h2>
      {moviesResults.length === 0 && <h3>No hay resultados.</h3>}

      <div className="row">
        {moviesResults.map((oneMovie, i) => {
          return (
            <div className="col-4" key={i}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  {/* <p className="card-text">
                    {oneMovie.overview.substring(0, 100)}...
                  </p> */}
                  <Link
                    to={`/detalle?movieID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
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

export default Resultados;
