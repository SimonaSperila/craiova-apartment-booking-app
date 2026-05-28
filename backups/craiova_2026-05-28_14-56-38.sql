-- MySQL dump 10.13  Distrib 8.4.9, for Linux (x86_64)
--
-- Host: db    Database: craiova
-- ------------------------------------------------------
-- Server version	8.4.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `place_translations`
--

DROP TABLE IF EXISTS `place_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place_translations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `place_id` int DEFAULT NULL,
  `language` varchar(5) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_translations`
--

LOCK TABLES `place_translations` WRITE;
/*!40000 ALTER TABLE `place_translations` DISABLE KEYS */;
INSERT INTO `place_translations` VALUES (1,1,'ro','Teatrul National Marin Sorescu','Centru cultural vibrant, spectacole diverse, arhitectura moderna emblematica.'),(5,1,'en','Marin Sorescu National Theatre','Founded in 1850, the theatre was named after the cultural figure and writer of universal stature Marin Sorescu in the years following the 1989 Revolution'),(8,3,'ro','Centrul vechi','Stradute cochete, cladiri istorice si terase primitoare.'),(9,3,'en','Old Town','Charming narrow streets, historic buildings, and welcoming terraces.'),(10,4,'ro','Stadionul Ion Oblemenco','Stadionul a fost inaugurat in 2017 si are o capacitate de 30.983 de locuri.'),(11,4,'en','Ion Oblemenco Stadium','The stadium was inaugurated in 2017 and has a capacity of 30,983 seats.'),(12,5,'ro','Parcul Nicolae Romanescu','Este cel mai mare si mai cunoscut parc al orauslui, fiind declarat monument istoric.'),(13,5,'en','Nicolae Romanescu Park','It is the citys largest and most famous park, declared a historical monument.');
/*!40000 ALTER TABLE `place_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `places` (
  `id` int NOT NULL AUTO_INCREMENT,
  `distance_m` int DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (1,140,44.31915952,23.79910704,'teatru.jpg','2026-05-07 10:25:07'),(3,280,44.31749684,23.79901193,'centrul-vechi.jpeg','2026-05-12 08:09:13'),(4,1600,44.31453320,23.78424168,'stadion.jpeg','2026-05-12 09:44:47'),(5,2100,44.30260038,23.79894223,'parcul-nicolae-romanescu.jpg','2026-05-12 09:56:27');
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-05-28 14:56:38
