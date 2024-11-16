const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const pool = require("./database");
const queries = require("./query");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("listening to port", PORT);
});

app.post("/movieflix/user", (request, response) => {
  const { email, password } = request.body;
  pool.query(queries.getUser, [email, password], (error, result) => {
    if (error) throw error;
    if (result.rows.length < 1) {
      response.status(404).json({ message: "no user found" });
      return;
    }
    response.send(result.rows);
  });
});

app.post("/movieflix/users/new", (request, response) => {
  const { user_name, email, password } = request.body;
  pool.query(queries.emailExists, [email], (error, result) => {
    if (error) throw error;
    if (result.rows.length > 0) {
      response.status(404).json({ message: "email already exist" });
      return;
    }
    pool.query(
      queries.addUser,
      [user_name, email, password],
      (error, result) => {
        if (error) throw error;
        response.send("succesfully added user");
      }
    );
  });
});

app.post("/movieflix/favorites/user", (request, response) => {
  const { id, title, poster_path, backdrop_path, overview, user_id } =
    request.body;
  pool.query(
    queries.addToFavorites,
    [title, poster_path, backdrop_path, overview, id, user_id],
    (error, result) => {
      if (error) throw error;
      response.send("successfully movie added to favorites");
    }
  );
});

app.get("/movieflix/:user_id/favoritemovies", (request, response) => {
  const user_id = request.params.user_id;
  pool.query(queries.getFavorites, [user_id], (error, result) => {
    if (error) throw error;
    response.send(result.rows);
  });
});

app.delete(
  "/movieflix/:user_id/favoritemovies/:movie_id",
  (request, response) => {
    const user_Id = request.params.user_id;
    const Movie_id = request.params.movie_id;
    pool.query(
      queries.removeFromFavorites,
      [user_Id, Movie_id],
      (error, result) => {
        if (error) throw error;
        response.send("succesfully removed from favorites");
      }
    );
  }
);
