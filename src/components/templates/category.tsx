import MovieList from '../organisms/movie-list';

function Category() {
  return (
    <div>
        <MovieList title={"Trending"} uri={"/3/trending/movie/day"}/>
        <MovieList title={"What's Popular"} uri={"/3/movie/popular"}/>
        <MovieList title={"Top Rated"} uri={"/3/movie/top_rated"}/>
    </div>
  )
}

export default Category;