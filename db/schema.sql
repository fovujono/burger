-- Create database
CREATE DATABASE IF NOT EXISTS burgers_db;

--Use dataase
USE burgers_db;

-- Create table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);
