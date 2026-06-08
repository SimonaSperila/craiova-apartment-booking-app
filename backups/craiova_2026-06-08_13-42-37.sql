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

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `positive` text,
  `negative` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `scrape_run_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Edyion','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:02:54',3),(2,'Melania','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:02:54',3),(3,'Popazu','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:02:54',3),(4,'Marko','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:02:54',3),(5,'Nikol','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:02:54',3),(6,'Kiril','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:02:54',3),(7,'Jelena','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:02:54',3),(8,'Edyion','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:05:04',4),(9,'Melania','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:05:04',4),(10,'Popazu','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:05:04',4),(11,'Marko','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:05:04',4),(12,'Nikol','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:05:04',4),(13,'Kiril','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:05:04',4),(14,'Jelena','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:05:04',4),(15,'Edyion','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:08:39',5),(16,'Melania','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:08:39',5),(17,'Popazu','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:08:39',5),(18,'Marko','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:08:39',5),(19,'Nikol','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:08:39',5),(20,'Kiril','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:08:39',5),(21,'Jelena','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:08:39',5),(22,'Daniela','Italia',8,'The location was perfect and near Craiova\'s main street. The flat was clean and with all facilities \nThere is a little kitchen, if you want to eat in the flat, and a little balcony on the theatre\'s square.','The third floor without elevator','2026-06-05 15:08:39',5),(23,'Andrea','Italia',10,'Allocato in centro citta ma non esposto al caos della movida, posizione perfetta.','','2026-06-05 15:08:39',5),(24,'Cristian','Italia',10,'Appartamento Ben ristrutturato, con tutto il necessario.','','2026-06-05 15:08:39',5),(25,'Ćosić','Serbia',10,'Lokacija,apartman,higijena,domaćin,parking....sve je na vrhunskom nivou','','2026-06-05 15:08:39',5),(26,'Andjela','Serbia',8,'Cistoca, sve je novo, divna posteljina.','Sve je biko super.','2026-06-05 15:08:39',5),(27,'Dana','România',10,'','','2026-06-05 15:08:39',5),(28,'Ivan','România',10,'','','2026-06-05 15:08:39',5),(29,'Bogdan','România',9,'','','2026-06-05 15:08:39',5),(30,'Florin','România',9,'','','2026-06-05 15:08:39',5),(31,'Dragance','Serbia',10,'','','2026-06-05 15:08:39',5),(32,'Ελένη','Grecia',10,'','','2026-06-05 15:08:39',5),(33,'Valentin','Bulgaria',10,'','','2026-06-05 15:08:39',5),(34,'Edyion','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:18:53',6),(35,'Melania','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:18:53',6),(36,'Popazu','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:18:53',6),(37,'Marko','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:18:53',6),(38,'Nikol','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:18:53',6),(39,'Kiril','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:18:53',6),(40,'Jelena','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:18:53',6),(41,'Daniela','Italia',8,'The location was perfect and near Craiova\'s main street. The flat was clean and with all facilities \nThere is a little kitchen, if you want to eat in the flat, and a little balcony on the theatre\'s square.','The third floor without elevator','2026-06-05 15:18:53',6),(42,'Andrea','Italia',10,'Allocato in centro citta ma non esposto al caos della movida, posizione perfetta.','','2026-06-05 15:18:53',6),(43,'Cristian','Italia',10,'Appartamento Ben ristrutturato, con tutto il necessario.','','2026-06-05 15:18:53',6),(44,'Ćosić','Serbia',10,'Lokacija,apartman,higijena,domaćin,parking....sve je na vrhunskom nivou','','2026-06-05 15:18:53',6),(45,'Andjela','Serbia',8,'Cistoca, sve je novo, divna posteljina.','Sve je biko super.','2026-06-05 15:18:53',6),(46,'Dana','România',10,'','','2026-06-05 15:18:53',6),(47,'Ivan','România',10,'','','2026-06-05 15:18:53',6),(48,'Bogdan','România',9,'','','2026-06-05 15:18:53',6),(49,'Florin','România',9,'','','2026-06-05 15:18:53',6),(50,'Dragance','Serbia',10,'','','2026-06-05 15:18:53',6),(51,'Ελένη','Grecia',10,'','','2026-06-05 15:18:53',6),(52,'Valentin','Bulgaria',10,'','','2026-06-05 15:18:53',6);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scrape_runs`
--

DROP TABLE IF EXISTS `scrape_runs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scrape_runs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `score_number` float DEFAULT NULL,
  `score_text` varchar(100) DEFAULT NULL,
  `reviews_text` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrape_runs`
--

LOCK TABLES `scrape_runs` WRITE;
/*!40000 ALTER TABLE `scrape_runs` DISABLE KEYS */;
INSERT INTO `scrape_runs` VALUES (1,9.7,'Excepţional','19 evaluări','2026-06-05 14:57:04'),(2,9.7,'Excepţional','19 evaluări','2026-06-05 14:59:05'),(3,9.7,'Excepţional','19 evaluări','2026-06-05 15:02:53'),(4,9.7,'Excepţional','19 evaluări','2026-06-05 15:05:03'),(5,9.7,'Excepţional','19 evaluări','2026-06-05 15:08:39'),(6,9.7,'Excepţional','19 evaluări','2026-06-05 15:18:52');
/*!40000 ALTER TABLE `scrape_runs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-08 13:42:37
