CREATE DATABASE burgers_db;
USE quotes_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date TIMESTAMP
	PRIMARY KEY (id)
);