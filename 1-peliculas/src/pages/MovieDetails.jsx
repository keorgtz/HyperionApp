import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImage } from "../utils/getMovieImage";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  },[movieId]);
  const ImageUrl = getMovieImage(movie.poster_path,500);

  return (
    <div className="detailsContainer"> 
        <img src={ImageUrl}
        alt={movie.title} className="col movieImg"/>
        <div className="col movieDetails">
            <p className="title">
                <strong>Title: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Genero: </strong>
                {generos.name}
            </p>
            <p>
                <strong>Descripcion: </strong>
                {movie.overview}
            </p>
        </div>
    </div>
  );
}
