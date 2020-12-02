-- The DROP DATABASE statement is used to drop an existing SQL database.
DROP DATABASE IF EXISTS favoriteThings;
-- The CREATE DATABASE statement is used to create a new SQL database.
CREATE DATABASE favoriteThings;

-- creating a table called names
USE favoriteThings;
CREATE TABLE names(
  id INT NOT NULL AUTO_INCREMENT,
  PersonName VARCHAR(30) DEFAULT '' NOT NULL,
  PRIMARY KEY (id)
);

