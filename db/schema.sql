DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

-- Use database
USE burgers_db;

-- Create table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(80),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);