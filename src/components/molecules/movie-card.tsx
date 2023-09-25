import { FC } from "react";
import "./movie-card.scss"
import MovieScore from "../atoms/movie-score";
import Movie from "../../model/movie";


type MovieCardProps = {
    movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
      <MovieScore score={movie.vote_average}/>
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
