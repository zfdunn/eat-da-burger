DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (255),
    consumed BOOLEAN NOT NULL DEFAULT 0
);