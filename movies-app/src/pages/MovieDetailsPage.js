import { useParams } from "react-router-dom";
import MovieContent from "../components/MovieContent";

function MovieDetailsPage({ moviesList }) {
  const { movieId } = useParams();
  const movie = moviesList.find((movie) => movie.id === parseInt(movieId));
  const pictureSize = "342";

  return (
    <MovieContent
      movieId={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      overview={movie.overview}
      releaseDate={movie.release_date}
      voteAverage={movie.vote_average}
      pictureSize={pictureSize}
    />
  );
}

export default MovieDetailsPage;
