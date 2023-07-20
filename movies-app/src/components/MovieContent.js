import { Card, CardContent } from "@mui/material";

function MovieContent({
  movieId,
  title,
  posterPath,
  overview,
  releaseDate,
  voteAverage,
  pictureSize
}) {
  const basePosterURL = "https://image.tmdb.org/t/p/w" + pictureSize;
  const completePosterURL = basePosterURL + posterPath;

  return (
    <Card className="movie">
      <CardContent>
        <h2>{title}</h2>
        <img src={completePosterURL} alt={title} />
        <p>{overview}</p>
        <p>Release Date: {releaseDate}</p>
        <p>Vote Average: {voteAverage}</p>
      </CardContent>
    </Card>
  );
}

export default MovieContent;
