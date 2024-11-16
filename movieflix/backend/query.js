const getUser = "select * from users where email = $1 and password = $2";
const emailExists = "select * from users where email = $1";
const addUser =
  "insert into users (user_name, email, password) values($1, $2, $3)";
const addToFavorites =
  "insert into favorites ( title, poster_path, backdrop_path, overview,id, user_id) values($1, $2, $3, $4, $5, $6)";
const getFavorites = "select * from favorites where user_id = $1";
const removeFromFavorites =
  "delete from favorites where user_id = $1 and id = $2";

module.exports = {
  getUser,
  emailExists,
  addUser,
  addToFavorites,
  getFavorites,
  removeFromFavorites,
};
