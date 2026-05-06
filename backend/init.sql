CREATE DATABASE IF NOT EXISTS craiova;
USE craiova;

CREATE TABLE places (
  id INT PRIMARY KEY AUTO_INCREMENT,
  lat DECIMAL(10,8),
  lng DECIMAL(11,8),
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
INSERT INTO places (lat, lng, image) VALUES
(44.3168, 23.8003, 'romanescu.jpg'),
(44.3302, 23.7949, 'muzeu.jpg');

INSERT INTO place_translations (place_id, language, name, description) VALUES
(1, 'ro', 'Parcul Romanescu', 'Cel mai mare parc din Craiova'),
(1, 'en', 'Romanescu Park', 'The largest park in Craiova'),
(2, 'ro', 'Muzeul de Artă', 'Palatul Jean Mihail'),
(2, 'en', 'Art Museum', 'Jean Mihail Palace');