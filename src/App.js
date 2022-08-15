import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import "./css/bootstrap.min.css";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import "./css/app.css";
function App() {
  const favMovies = localStorage.getItem("favs");

  let tempMovieInFavs;

  if (favMovies === null) {
    tempMovieInFavs = [];
  } else {
    tempMovieInFavs = JSON.parse(favMovies);
  }

  console.log(tempMovieInFavs);

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset["movieId"],
    };
    let movieIsInArray = tempMovieInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });
    if (!movieIsInArray) {
      tempMovieInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMovieInFavs));
      console.log("Se agregó la película.");
    } else {
      let moviesLeft = tempMovieInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      console.log("Se eliminó la película.");
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-2">
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route
            path="/resultados"
            element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
