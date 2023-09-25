import { FC, useEffect, useState } from "react";
import MovieCard from "../molecules/movie-card";
import "./movie-list.scss" 
import api from "../../config/axios";
import Movie from "../../model/movie";

//props
type MovieListProps = {
    title: string;
    uri: string;
};

const MovieList: FC<MovieListProps> = ({title, uri}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const fetchMovieData = async () => {
    const response = await api.get(uri);
    setMovies(response.data.results);
  };  

  useEffect(() => {
    fetchMovieData();
  }, [uri]); 
    
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movie-list__movie">
        {movies.map(movie => {
            return <MovieCard movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default MovieList;
