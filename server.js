const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
//requiring the necessary pieces of a server, including morgan for logging, express as the server.

//server connection to the db
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  datbase: "favoritesThings",
});

//interface to mysql
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

//port
const PORT = process.env.PORT || 8080;
const app = express();

//morgan logger
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//this is the joining of the two tables as well as the result and error.
app.get("/favoriteThings", function (req, res) {
  const query =
    "select n.first_name, n.last_name, t.favorite1, t.favorite2, t.favorite3 FROM names n INNER JOIN threeFavorites t ON n.id = t.names_id";
  connection.query(query, function (result, err) {
    if (err) throw err;
    res.send(result);
  });
});
//actually listening on the port for requests
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
