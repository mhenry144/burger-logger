CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INTEGER(45) NOT NULL
    AUTO_INCREMENT,
	burger_name VARCHAR
    (45) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);