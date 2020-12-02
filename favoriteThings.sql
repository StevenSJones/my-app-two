-- The DROP DATABASE statement is used to drop an existing SQL database.
DROP DATABASE IF EXISTS favoriteThings;
-- The CREATE DATABASE statement is used to create a new SQL database.
CREATE DATABASE favoriteThings;

-- creating a table called names
USE favoriteThings;
CREATE TABLE names(
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
);

-- creating a table called favorites
CREATE TABLE favorites(
  favorite_1 VARCHAR(30) DEFAULT '' NOT NULL,
  favorite_2 VARCHAR(30) DEFAULT '' NOT NULL,
  favorite_3 VARCHAR(30) DEFAULT '' NOT NULL,
  names_id INT NOT NULL,
  PRIMARY KEY (id)
);

