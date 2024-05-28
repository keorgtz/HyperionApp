
import "../components/MovieCard.css"
export function MovieCard({movie}) {
const ImageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;


  return (
    <li className="movieCard">
      <img width={230} 
      height={345} 
      src={ImageUrl}
      alt={movie.title} 
      className="movieImage" />
      <div>{movie.title}</div>
    </li>
  )
}
