CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE patties
(
    id INTEGER(11) NOT NULL
    AUTO_INCREMENT,
	patty_name VARCHAR
    (80) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY
    (id)
);