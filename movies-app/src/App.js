import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { Alert, Snackbar } from "@mui/material";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [filteredMoviesList, setFilteredMoviesList] = useState([]);

  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        handleAlert("", false, "");
      }, 1500);
    }
  }, [showAlert]);

  const handleAlert = (message, isShow, type) => {
    setAlertMsg(message);
    setShowAlert(isShow);
    setAlertType(type);
  };

  const getMovies = useCallback(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTM0Y2VjZWFlNDgzMTc3YjUzODkyMzdiZGRiMjMyMCIsInN1YiI6IjY0YjdjYjE2NWFhZGM0MDBjNThhYjI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pT8FnVCb01CenyIQYMfMKhXshrMIGrVL2MUAGmWjdhk",
        },
      })
      .then((response) => {
        console.log(response.data.results);
        setMoviesList(response.data.results);
        setFilteredMoviesList(response.data.results);
      })
      .catch((error) => {
        handleAlert(error.message, true, "error");
      });
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const onRatingChange = (rating) => {
    setFilteredMoviesList(moviesList.filter((movie) => movie.vote_average >= rating));
  };

  return (
    <div className="App">
      {showAlert && (
        <Snackbar open={true} data-testid="alert-snackbar">
          <Alert severity={alertType} data-testid="alert">
            {alertMsg}
          </Alert>
        </Snackbar>
      )}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home moviesList={filteredMoviesList} onRatingChange={onRatingChange} />
            }
          />
          <Route path="/:movieId" element={<MovieDetailsPage moviesList={moviesList}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
