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

app.post("/user", (request, response) => {
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

app.post("/users/new", (request, response) => {
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
