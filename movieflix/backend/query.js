const getUser = "select * from users where email = $1 and password = $2";
const emailExists = "select * from users where email = $1";
const addUser =
  "insert into users (user_name, email, password) values($1, $2, $3)";

module.exports = { getUser, emailExists, addUser };
