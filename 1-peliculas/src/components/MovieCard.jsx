
import "../components/MovieCard.css"
import { Link } from  "react-router-dom";

export function MovieCard({movie}) {
const ImageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;


  return (
    <li className="movieCard">
      <Link to={"/movies/"+movie.id}>
      <img 
      width={230} 
      height={345} 
      src={ImageUrl}
      alt={movie.title} 
      className="movieImage" 
      />
      <div>{movie.title}</div>
      </Link>
    </li>
  )
}
