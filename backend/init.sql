-- MySQL dump 10.13  Distrib 8.4.9, for Linux (x86_64)
--
-- Host: localhost    Database: craiova
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
-- Table structure for table `event_translations`
--

DROP TABLE IF EXISTS `event_translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_translations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `language` varchar(5) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `details` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_translations`
--

LOCK TABLES `event_translations` WRITE;
/*!40000 ALTER TABLE `event_translations` DISABLE KEYS */;
INSERT INTO `event_translations` VALUES (9,5,'ro','Cinema Patria Craiova','Trooper','Trooper va marca 30 de ani de activitate printr-un turneu major ce va ajunge în nu mai puțin de 28 de orașe.','https://zilesinopti.ro/evenimente/trooper-cinema-patria-craiova-2/'),(10,5,'en','Cinema Patria Craiova','Trooper','Trooper will celebrate 30 years of activity with a major anniversary tour, performing in no fewer than 28 cities.','https://zilesinopti.ro/evenimente/trooper-cinema-patria-craiova-2/'),(11,6,'ro','Teatrul Național Marin Sorescu','Vizionarii','Păstrează-ți creierul viu, mintea limpede și viața în propriile mâini. Trăim viața pe care o poate susține mintea și creierul nostru.','https://zilesinopti.ro/evenimente/vizionarii-teatrul-national-craiova/'),(12,6,'en','Marin Sorescu National Theatre','The Visionaries','Keep your brain active, your mind clear, and your life in your own hands. We live the life that our mind and brain are capable of sustaining.','https://zilesinopti.ro/evenimente/vizionarii-teatrul-national-craiova/'),(13,7,'ro','Teatrul Național Marin Sorescu','Ștefan Bănică','STEFAN BANICA isi spune POVESTEA intr-un TURNEU NATIONAL „POVESTEA MEA”.','https://zilesinopti.ro/evenimente/stefan-banica-teatrul-national-craiova/'),(14,7,'en','Marin Sorescu National Theatre','Ștefan Bănică','Ștefan Bănică tells his story in the national tour \"My Story\".','https://zilesinopti.ro/evenimente/stefan-banica-teatrul-national-craiova/'),(15,8,'ro','Teatrul Național Marin Sorescu','Romeo și Julieta','Cea mai cunoscută poveste de iubire din lume revine într-o montare spectaculoasă semnată de regizorul Toma Enache, creatorul succesului „O scrisoare pierdută”, realizat împreună cu aceeași echipă artistică si acelasi producator, apreciată de public.','https://zilesinopti.ro/evenimente/romeo-si-julieta-craiova/'),(16,8,'en','Marin Sorescu National Theatre','Romeo and Juliet','The world\'s most famous love story returns in a spectacular production directed by Toma Enache, the creator of the acclaimed \"A Lost Letter\", produced together with the same artistic team and producer that earned widespread audience appreciation.','https://zilesinopti.ro/evenimente/romeo-si-julieta-craiova/'),(17,9,'ro','Filarmonica Oltenia Craiova','Mizerabilii','O poveste monumentală despre cădere și renaștere, vină și iertare,minciună și adevăr, iubire și revoluție.','https://zilesinopti.ro/evenimente/mizerabilii-filarmonica-oltenia-craiova/'),(18,9,'en','Oltenia Philharmonic Craiova','Les Misérables','A monumental story of downfall and redemption, guilt and forgiveness, lies and truth, love and revolution.','https://zilesinopti.ro/evenimente/mizerabilii-filarmonica-oltenia-craiova/'),(19,10,'ro','Teatrul Național Marin Sorescu','Cocoșatul de la Notre-Dame','Theater du Soleil Entertainment vă răsfaţă cu o nouă producţie dinamică, plină de culoare şi emoţie. „Cocoșatul de la Notre Dame” redă cu măiestrie una dintre cele mai vechi poveşti, într-un MUSICAL LIVE, în care personajele prind viaţă.','https://zilesinopti.ro/evenimente/cocosatul-de-la-notre-dame-teatrul-national-marin-sorescu/'),(20,10,'en','Marin Sorescu National Theatre','The Hunchback of Notre-Dame','Theater du Soleil Entertainment presents a new dynamic production filled with color and emotion. \"The Hunchback of Notre-Dame\" brilliantly brings one of the world\'s oldest stories to life in a live musical, where its unforgettable characters come alive on stage.','https://zilesinopti.ro/evenimente/cocosatul-de-la-notre-dame-teatrul-national-marin-sorescu/'),(21,11,'ro','Teatrul Național Marin Sorescu','Aurelian Temișan','Un spectacol live plin de emoție, eleganță și muzică de cea mai bună calitate.','https://zilesinopti.ro/evenimente/aurelian-temisan-teatrul-craiova/'),(22,11,'en','Marin Sorescu National Theatre','Aurelian Temișan','A live performance filled with emotion, elegance, and the highest-quality music.','https://zilesinopti.ro/evenimente/aurelian-temisan-teatrul-craiova/'),(23,12,'ro','Filarmonica Oltenia Craiova','Mirabela Dauer & Gabriel Dorobanțu','Un spectacol de suflet, plin de emoție și nostalgie, îi aduce pe aceeași scenă pe doi dintre cei mai îndrăgiți artiști ai muzicii românești: Mirabela Dauer și Gabriel Dorobanțu.','https://zilesinopti.ro/evenimente/mirabela-dauer-gabriel-dorobantu-craiova/'),(24,12,'en','Oltenia Philharmonic Craiova','Mirabela Dauer & Gabriel Dorobanțu','A heartfelt performance filled with emotion and nostalgia brings together on the same stage two of Romania\'s most beloved music artists: Mirabela Dauer and Gabriel Dorobanțu.','https://zilesinopti.ro/evenimente/mirabela-dauer-gabriel-dorobantu-craiova/'),(25,13,'ro','Casa de Cultură a Studenților Craiova','The Evolution of Magic','Un spectacol modern de magie pentru teatru care combină iluzii, mentalism, poveste, interacțiune cu publicul și magie vizuală, creând o experiență teatrală completă.','https://zilesinopti.ro/evenimente/the-evolution-of-magic-craiova/'),(26,13,'en','Students\' Culture House Craiova','The Evolution of Magic','A modern theatrical magic show that combines illusions, mentalism, storytelling, audience interaction, and visual magic to create a complete theatrical experience.','https://zilesinopti.ro/evenimente/the-evolution-of-magic-craiova/'),(27,14,'ro','Filarmonica Oltenia','Invitație la Vals','În seara de 12 noiembrie, în stagiunea Musical Extravaganza, luminile se vor aprinde peste eleganța unei epoci apuse, iar Filarmonica Oltenia va deveni scena unui bal de poveste.','https://zilesinopti.ro/evenimente/invitatie-la-vals-filarmonica-oltenia/'),(28,14,'en','Oltenia Philharmonic','Invitation to the Waltz','On the evening of November 12, as part of the Musical Extravaganza season, the lights will rise on the elegance of a bygone era, and the Oltenia Philharmonic will be transformed into the stage of a fairy-tale ballroom.','https://zilesinopti.ro/evenimente/invitatie-la-vals-filarmonica-oltenia/');
/*!40000 ALTER TABLE `event_translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_date` datetime NOT NULL,
  `event_time` time DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `is_popular` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (5,'2026-09-18 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(6,'2026-09-20 00:00:00','16:00:00','alte-evenimente',0,'2026-07-16 11:42:35'),(7,'2026-10-07 00:00:00','19:30:00','concerte',0,'2026-07-16 11:42:35'),(8,'2026-10-12 00:00:00','19:00:00','teatru',0,'2026-07-16 11:42:35'),(9,'2026-10-26 00:00:00','19:00:00','teatru',0,'2026-07-16 11:42:35'),(10,'2026-10-26 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),(11,'2026-10-28 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(12,'2026-11-04 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(13,'2026-11-12 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),(14,'2026-11-12 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(15,'2026-11-27 00:00:00','18:00:00',NULL,0,'2026-07-16 11:42:35'),(16,'2026-11-28 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(17,'2026-12-05 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(18,'2026-12-06 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(19,'2026-12-08 00:00:00','19:30:00',NULL,0,'2026-07-16 11:42:35'),(20,'2026-12-09 00:00:00','20:00:00',NULL,0,'2026-07-16 11:42:35'),(21,'2026-12-16 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrape_runs`
--

LOCK TABLES `scrape_runs` WRITE;
/*!40000 ALTER TABLE `scrape_runs` DISABLE KEYS */;
INSERT INTO `scrape_runs` VALUES (1,9.7,'Excepţional','19 evaluări','2026-06-05 14:57:04'),(2,9.7,'Excepţional','19 evaluări','2026-06-05 14:59:05'),(3,9.7,'Excepţional','19 evaluări','2026-06-05 15:02:53'),(4,9.7,'Excepţional','19 evaluări','2026-06-05 15:05:03'),(5,9.7,'Excepţional','19 evaluări','2026-06-05 15:08:39'),(6,9.7,'Excepţional','19 evaluări','2026-06-05 15:18:52'),(7,9.7,'Excepţional','21 evaluări','2026-06-19 13:20:30'),(8,9.7,'Excepţional','21 evaluări','2026-06-19 13:34:02');
/*!40000 ALTER TABLE `scrape_runs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'craiova'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-24 13:55:12
