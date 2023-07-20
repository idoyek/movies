import Movie from "./Movie";
import FilterZone from "./FilterZone";
import { List } from "@mui/material";


function Home({ moviesList, onRatingChange }) {
  return (
    <div className="container">
      <List sx={{ width: "650px" }}>
        {moviesList.map((movie) => (
          <Movie
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            overview={movie.overview}
            releaseDate={movie.release_date}
            voteAverage={movie.vote_average}
          />
        ))}
      </List>
      <FilterZone onRatingChange={onRatingChange}/>
    </div>
  );
}

export default Home;
