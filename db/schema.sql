CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT false,
  createdat timestamp not null DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);