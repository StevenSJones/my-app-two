const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const cors = require('cors')
//requiring the necessary pieces of a server, including morgan for logging, express as the server, cors and mysql

//server connection to the db including the port for the server (dialing but not sending the call)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  datbase: "favoriteThings",
});

//interface to mysql (the actual connection)
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

//port for the application
const PORT = process.env.PORT || 7800;
const app = express();


//using the imports from above, after they are used with app.use I can actually perform actions with them
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//this is the joining of the two tables as well as the result and error.
app.get("/favoriteThings", function (req, res) {
  const query =
    "select n.first_name, n.last_name, t.favorite_1, t.favorite_2, t.favorite_3 FROM favoriteThings.names n INNER JOIN favoriteThings.threeFavorites t ON n.id = t.names_id";
  connection.query(query, function (err, result) {
    if (err) throw err;
    console.table(result);
    res.send(result);
  });
});
//actually listening on the port for requests (dialing the number)
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
