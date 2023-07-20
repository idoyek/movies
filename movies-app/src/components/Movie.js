import { ListItem, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieContent from "./MovieContent";

function Movie({
  movieId,
  title,
  posterPath,
  overview,
  releaseDate,
  voteAverage,
}) {
  const navigate = useNavigate();

  const movieClickHandler = () => {
    navigate(`/${movieId}`);
  };

  const pictureSize = "154";

  return (
    <ListItem alignItems="flex-start" key={movieId} className="movie">
      <ListItemButton disableGutters onClick={movieClickHandler}>
        <MovieContent
          movieId={movieId}
          title={title}
          posterPath={posterPath}
          overview={overview}
          releaseDate={releaseDate}
          voteAverage={voteAverage}
          pictureSize={pictureSize}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default Movie;
