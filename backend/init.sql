CREATE DATABASE IF NOT EXISTS craiova;
USE craiova;

CREATE TABLE places (
  id INT PRIMARY KEY AUTO_INCREMENT,
  distance VARCHAR(50),
  image VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE place_translations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  place_id INT,
  language VARCHAR(5),
  name VARCHAR(255),
  description TEXT
);

-- date demo
INSERT INTO places (distance, image) VALUES
('140 m', 'teatru.jpg'),
('10 km', 'romanescu.jpg');

INSERT INTO place_translations (place_id, language, name, description) VALUES
(1, 'ro', 'Teatrul National Marin Sorescu', 'Fondat in 1850, teatrul a fost denumit după omul de cultura si scriitorul de talie universala Marin Sorescu, in anii de dupa Revolutia din 1989'),
(1, 'en', 'Marin Sorescu National Theatre', 'Founded in 1850, the theatre was named after the cultural figure and writer of universal stature Marin Sorescu in the years following the 1989 Revolution'),
(2, 'ro', 'Parcul Romanescu', 'Cel mai mare parc din Craiova'),
(2, 'en', 'Romanescu Park', 'The largest park in Craiova');