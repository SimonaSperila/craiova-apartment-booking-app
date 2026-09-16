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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_translations`
--

LOCK TABLES `event_translations` WRITE;
/*!40000 ALTER TABLE `event_translations` DISABLE KEYS */;
INSERT INTO `event_translations` VALUES (9,5,'ro','Cinema Patria Craiova','Trooper','Trooper va marca 30 de ani de activitate printr-un turneu major ce va ajunge în nu mai puțin de 28 de orașe.','https://zilesinopti.ro/evenimente/trooper-cinema-patria-craiova-2/'),(10,5,'en','Cinema Patria Craiova','Trooper','Trooper will celebrate 30 years of activity with a major anniversary tour, performing in no fewer than 28 cities.','https://zilesinopti.ro/evenimente/trooper-cinema-patria-craiova-2/'),(11,6,'ro','Teatrul Național Marin Sorescu','Vizionarii','Păstrează-ți creierul viu, mintea limpede și viața în propriile mâini. Trăim viața pe care o poate susține mintea și creierul nostru.','https://zilesinopti.ro/evenimente/vizionarii-teatrul-national-craiova/'),(12,6,'en','Marin Sorescu National Theatre','The Visionaries','Keep your brain active, your mind clear, and your life in your own hands. We live the life that our mind and brain are capable of sustaining.','https://zilesinopti.ro/evenimente/vizionarii-teatrul-national-craiova/'),(13,7,'ro','Teatrul Național Marin Sorescu','Ștefan Bănică','STEFAN BANICA isi spune POVESTEA intr-un TURNEU NATIONAL „POVESTEA MEA”.','https://zilesinopti.ro/evenimente/stefan-banica-teatrul-national-craiova/'),(14,7,'en','Marin Sorescu National Theatre','Ștefan Bănică','Ștefan Bănică tells his story in the national tour \"My Story\".','https://zilesinopti.ro/evenimente/stefan-banica-teatrul-national-craiova/'),(15,8,'ro','Teatrul Național Marin Sorescu','Romeo și Julieta','Cea mai cunoscută poveste de iubire din lume revine într-o montare spectaculoasă semnată de regizorul Toma Enache, creatorul succesului „O scrisoare pierdută”, realizat împreună cu aceeași echipă artistică si acelasi producator, apreciată de public.','https://zilesinopti.ro/evenimente/romeo-si-julieta-craiova/'),(16,8,'en','Marin Sorescu National Theatre','Romeo and Juliet','The world\'s most famous love story returns in a spectacular production directed by Toma Enache, the creator of the acclaimed \"A Lost Letter\", produced together with the same artistic team and producer that earned widespread audience appreciation.','https://zilesinopti.ro/evenimente/romeo-si-julieta-craiova/'),(17,9,'ro','Filarmonica Oltenia Craiova','Mizerabilii','O poveste monumentală despre cădere și renaștere, vină și iertare,minciună și adevăr, iubire și revoluție.','https://zilesinopti.ro/evenimente/mizerabilii-filarmonica-oltenia-craiova/'),(18,9,'en','Oltenia Philharmonic Craiova','Les Misérables','A monumental story of downfall and redemption, guilt and forgiveness, lies and truth, love and revolution.','https://zilesinopti.ro/evenimente/mizerabilii-filarmonica-oltenia-craiova/'),(19,10,'ro','Teatrul Național Marin Sorescu','Cocoșatul de la Notre-Dame','Theater du Soleil Entertainment vă răsfaţă cu o nouă producţie dinamică, plină de culoare şi emoţie. „Cocoșatul de la Notre Dame” redă cu măiestrie una dintre cele mai vechi poveşti, într-un MUSICAL LIVE, în care personajele prind viaţă.','https://zilesinopti.ro/evenimente/cocosatul-de-la-notre-dame-teatrul-national-marin-sorescu/'),(20,10,'en','Marin Sorescu National Theatre','The Hunchback of Notre-Dame','Theater du Soleil Entertainment presents a new dynamic production filled with color and emotion. \"The Hunchback of Notre-Dame\" brilliantly brings one of the world\'s oldest stories to life in a live musical, where its unforgettable characters come alive on stage.','https://zilesinopti.ro/evenimente/cocosatul-de-la-notre-dame-teatrul-national-marin-sorescu/'),(21,11,'ro','Teatrul Național Marin Sorescu','Aurelian Temișan','Un spectacol live plin de emoție, eleganță și muzică de cea mai bună calitate.','https://zilesinopti.ro/evenimente/aurelian-temisan-teatrul-craiova/'),(22,11,'en','Marin Sorescu National Theatre','Aurelian Temișan','A live performance filled with emotion, elegance, and the highest-quality music.','https://zilesinopti.ro/evenimente/aurelian-temisan-teatrul-craiova/'),(23,12,'ro','Filarmonica Oltenia Craiova','Mirabela Dauer & Gabriel Dorobanțu','Un spectacol de suflet, plin de emoție și nostalgie, îi aduce pe aceeași scenă pe doi dintre cei mai îndrăgiți artiști ai muzicii românești: Mirabela Dauer și Gabriel Dorobanțu.','https://zilesinopti.ro/evenimente/mirabela-dauer-gabriel-dorobantu-craiova/'),(24,12,'en','Oltenia Philharmonic Craiova','Mirabela Dauer & Gabriel Dorobanțu','A heartfelt performance filled with emotion and nostalgia brings together on the same stage two of Romania\'s most beloved music artists: Mirabela Dauer and Gabriel Dorobanțu.','https://zilesinopti.ro/evenimente/mirabela-dauer-gabriel-dorobantu-craiova/'),(25,13,'ro','Casa de Cultură a Studenților Craiova','The Evolution of Magic','Un spectacol modern de magie pentru teatru care combină iluzii, mentalism, poveste, interacțiune cu publicul și magie vizuală, creând o experiență teatrală completă.','https://zilesinopti.ro/evenimente/the-evolution-of-magic-craiova/'),(26,13,'en','Students\' Culture House Craiova','The Evolution of Magic','A modern theatrical magic show that combines illusions, mentalism, storytelling, audience interaction, and visual magic to create a complete theatrical experience.','https://zilesinopti.ro/evenimente/the-evolution-of-magic-craiova/'),(27,14,'ro','Filarmonica Oltenia','Invitație la Vals','În seara de 12 noiembrie, în stagiunea Musical Extravaganza, luminile se vor aprinde peste eleganța unei epoci apuse, iar Filarmonica Oltenia va deveni scena unui bal de poveste.','https://zilesinopti.ro/evenimente/invitatie-la-vals-filarmonica-oltenia/'),(28,14,'en','Oltenia Philharmonic','Invitation to the Waltz','On the evening of November 12, as part of the Musical Extravaganza season, the lights will rise on the elegance of a bygone era, and the Oltenia Philharmonic will be transformed into the stage of a fairy-tale ballroom.','https://zilesinopti.ro/evenimente/invitatie-la-vals-filarmonica-oltenia/'),(29,22,'ro','Calea Unirii, Craiova','Puppets Occupy Street 2026 – Ediția Stardust','Festivalul internațional de teatru de stradă și marionete revine la Craiova, la a 13-a ediție, cu artiști din 16 țări: spectacole, ateliere gratuite, concerte și instalații, cu parada de deschidere pe Calea Unirii.','https://craiovalive.ro/eveniment/puppets-occupy-street-2026-stardust-edition/2026-08-26/'),(30,22,'en','Calea Unirii, Craiova','Puppets Occupy Street 2026 – Stardust Edition','The international street theatre and puppet festival returns to Craiova for its 13th edition, bringing artists from 16 countries: performances, free workshops, concerts and installations, opening with a parade on Calea Unirii.','https://craiovalive.ro/eveniment/puppets-occupy-street-2026-stardust-edition/2026-08-26/'),(31,23,'ro','Filarmonica „Oltenia” și Grădina Bibliotecii Județene „Alexandru și Aristia Aman”','Craiova Jazz Festival','Trei seri de jazz, cu Irina Sârbu, Sorin Zlat, Big Band Radio România, Jazzappella, Ethnotic Project și mulți alții. Evenimentele au loc în perioada 12–14 septembrie, începând cu ora 18:00.',NULL),(32,23,'en','Oltenia Philharmonic and the \"Alexandru and Aristia Aman\" County Library Garden','Craiova Jazz Festival','Three evenings of jazz featuring Irina Sârbu, Sorin Zlat, the Radio Romania Big Band, Jazzappella, Ethnotic Project and many others. The festival runs September 12–14, with events starting at 6:00 PM.',NULL),(33,24,'ro','Teatrul Național „Marin Sorescu”, Piața William Shakespeare, Parcul Nicolae Romanescu, Electroputere Mall și alte spații din Craiova','CONNECT – Common Ground','Cinci zile de dans contemporan, performance-uri, ateliere, proiecții și expoziții, care transformă orașul într-o adevărată scenă. Evenimentul are loc în perioada 9–13 septembrie.',NULL),(34,24,'en','Marin Sorescu National Theatre, William Shakespeare Square, Nicolae Romanescu Park, Electroputere Mall and other venues across Craiova','CONNECT – Common Ground','Five days of contemporary dance, performances, workshops, screenings and exhibitions that turn the whole city into a stage. The event runs September 9–13.',NULL),(35,25,'ro','Casa Dianu – Muzeul Cărții și Exilului Românesc','InstaCraiova, The Festival','Ediția a XI-a vine cu tema „Analog vs. Digital” și aduce împreună fotografia, muzica, atelierele, expozițiile și conferințele. Are loc în perioada 11–13 septembrie.',NULL),(36,25,'en','Dianu House – The Museum of the Romanian Book and Exile','InstaCraiova, The Festival','The 11th edition arrives with the theme \"Analog vs. Digital\", bringing together photography, music, workshops, exhibitions and conferences. It runs September 11–13.',NULL),(37,26,'ro','Ramada Plaza','Romania Grand Prix – Craiova','Craiova devine capitala șahului rapid! Aproape 250 de jucători din 16 țări sunt înscriși pentru ultima etapă a circuitului. Se desfășoară pe 12–13 septembrie.',NULL),(38,26,'en','Ramada Plaza','Romania Grand Prix – Craiova','Craiova becomes the capital of rapid chess! Nearly 250 players from 16 countries are registered for the final stage of the circuit. It takes place September 12–13.',NULL),(39,27,'ro','Teatrul de Vară – Parcul Nicolae Romanescu','RoPOT in the Park','Primul concept care aduce muzica house la Teatrul de Vară din Parcul Nicolae Romanescu. Are loc pe 12 septembrie, între orele 15:00–23:00.',NULL),(40,27,'en','Summer Theatre – Nicolae Romanescu Park','RoPOT in the Park','The first concept to bring house music to the Summer Theatre in Nicolae Romanescu Park. Taking place on September 12, from 3:00 PM to 11:00 PM.',NULL),(41,28,'ro','Piața Mihai Viteazul','Urban Playfield','Craiova, hai la joacă! Orașul se transformă într-un adevărat teren de joacă pentru întreaga familie, cu două zile pline de mișcare, voie bună și activități sportive pentru toate vârstele. Are loc pe 19–20 septembrie.',NULL),(42,28,'en','Mihai Viteazul Square','Urban Playfield','Craiova, let\'s play! The city turns into a real playground for the whole family, with two days full of movement, good vibes and sports activities for all ages. It takes place September 19–20.',NULL),(43,29,'ro','Sala Polivalentă','IntenCity Festival – ediția a 5-a','Craiova va vibra din nou! Ediția din acest an pregătește o întâlnire cu totul aparte, cu Puya Urban Simfonic pe scena Sălii Polivalente din Craiova. Are loc pe 25–26 septembrie.',NULL),(44,29,'en','Polivalenta Hall','IntenCity Festival – 5th edition','Craiova will vibrate once again! This year\'s edition brings a truly special encounter, with Puya Urban Simfonic performing on the Polivalenta Hall stage in Craiova. It takes place September 25–26.',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (5,'2026-09-18 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(6,'2026-09-20 00:00:00','16:00:00','alte-evenimente',0,'2026-07-16 11:42:35'),(7,'2026-10-07 00:00:00','19:30:00','concerte',0,'2026-07-16 11:42:35'),(8,'2026-10-12 00:00:00','19:00:00','teatru',0,'2026-07-16 11:42:35'),(9,'2026-10-26 00:00:00','19:00:00','teatru',0,'2026-07-16 11:42:35'),(10,'2026-10-26 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),(11,'2026-10-28 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(12,'2026-11-04 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(13,'2026-11-12 00:00:00','19:00:00','spectacole',0,'2026-07-16 11:42:35'),(14,'2026-11-12 00:00:00','19:00:00','concerte',0,'2026-07-16 11:42:35'),(15,'2026-11-27 00:00:00','18:00:00',NULL,0,'2026-07-16 11:42:35'),(16,'2026-11-28 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(17,'2026-12-05 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(18,'2026-12-06 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(19,'2026-12-08 00:00:00','19:30:00',NULL,0,'2026-07-16 11:42:35'),(20,'2026-12-09 00:00:00','20:00:00',NULL,0,'2026-07-16 11:42:35'),(21,'2026-12-16 00:00:00','19:00:00',NULL,0,'2026-07-16 11:42:35'),(22,'2026-08-25 00:00:00',NULL,NULL,1,'2026-08-25 09:00:00'),(23,'2026-09-12 00:00:00','18:00:00','concerte',0,'2026-09-03 00:00:00'),(24,'2026-09-09 00:00:00',NULL,'spectacole',0,'2026-09-03 00:00:00'),(25,'2026-09-11 00:00:00',NULL,'alte-evenimente',0,'2026-09-03 00:00:00'),(26,'2026-09-12 00:00:00',NULL,'alte-evenimente',0,'2026-09-03 00:00:00'),(27,'2026-09-12 00:00:00','15:00:00','concerte',0,'2026-09-03 00:00:00'),(28,'2026-09-19 00:00:00',NULL,'alte-evenimente',0,'2026-09-03 00:00:00'),(29,'2026-09-25 00:00:00',NULL,'concerte',0,'2026-09-03 00:00:00');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `local_businesses`
--

DROP TABLE IF EXISTS `local_businesses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `local_businesses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `distance_m` int NOT NULL,
  `category` varchar(100) NOT NULL,
  `google_maps_url` varchar(500) NOT NULL,
  `is_24_7` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `local_businesses`
--

LOCK TABLES `local_businesses` WRITE;
/*!40000 ALTER TABLE `local_businesses` DISABLE KEYS */;
INSERT INTO `local_businesses` VALUES (1,'Electroputere Mall',3100,'Mall','https://maps.app.goo.gl/efzfQq6fUHYPtC5q8',0),(2,'Promenada Mall',2900,'Mall','https://maps.app.goo.gl/a9RKBfNfM97QAYhr7',0),(3,'DM',140,'Drogherie','https://maps.app.goo.gl/sv4XzzDDqXT1sxt86',0),(4,'Mercur Center',400,'Centru comercial','https://maps.app.goo.gl/UCb5kZeu6PusB9A4A',0),(5,'MyAuchan',300,'Supermarket','https://maps.app.goo.gl/dtRUdz8cQ3mqcKbVA',0),(6,'Catena',70,'Farmacie','https://maps.app.goo.gl/f7vzfMHFuvjFUJtG7',0),(7,'5 To Go',73,'Cafenea','https://maps.app.goo.gl/48Ty9GQha1FprR6J6',0),(8,'Profi',550,'Supermarket','https://maps.app.goo.gl/sjQTo1GekMxE37E58',1);
/*!40000 ALTER TABLE `local_businesses` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_translations`
--

LOCK TABLES `place_translations` WRITE;
/*!40000 ALTER TABLE `place_translations` DISABLE KEYS */;
INSERT INTO `place_translations` VALUES (1,1,'ro','Teatrul National Marin Sorescu','Centru cultural vibrant, spectacole diverse, arhitectura moderna emblematica.'),(5,1,'en','Marin Sorescu National Theatre','Founded in 1850, the theatre was named after the cultural figure and writer of universal stature Marin Sorescu in the years following the 1989 Revolution'),(8,3,'ro','Centrul vechi','Stradute cochete, cladiri istorice si terase primitoare.'),(9,3,'en','Old Town','Charming narrow streets, historic buildings, and welcoming terraces.'),(10,4,'ro','Stadionul Ion Oblemenco','Stadionul a fost inaugurat in 2017 si are o capacitate de 30.983 de locuri.'),(11,4,'en','Ion Oblemenco Stadium','The stadium was inaugurated in 2017 and has a capacity of 30,983 seats.'),(12,5,'ro','Parcul Nicolae Romanescu','Este cel mai mare si mai cunoscut parc al orauslui, fiind declarat monument istoric.'),(13,5,'en','Nicolae Romanescu Park','It is the citys largest and most famous park, declared a historical monument.'),(14,6,'ro','Muzeul de Artă','Găzduit în fostul Palat Jean Mihail, expune o colecție importantă de artă românească și europeană, printre care sculpturi de Constantin Brâncuși.'),(15,6,'en','Art Museum','Housed in the former Jean Mihail Palace, it displays an important collection of Romanian and European art, including sculptures by Constantin Brâncuși.'),(16,7,'ro','Grădina Botanică „Alexandru Buia”','Grădină botanică universitară cu sute de specii de plante, sere tropicale și alei umbroase, ideală pentru o plimbare relaxantă.'),(17,7,'en','Alexandru Buia Botanical Garden','A university botanical garden with hundreds of plant species, tropical greenhouses and shaded paths, perfect for a relaxing walk.'),(18,8,'ro','Catedrala „Sfântul Dumitru”','Catedrală ortodoxă impunătoare din centrul orașului, cunoscută pentru arhitectura sa neo-bizantină și picturile interioare.'),(19,8,'en','Saint Demetrius Cathedral','An imposing Orthodox cathedral in the city centre, known for its neo-Byzantine architecture and interior paintings.'),(20,9,'ro','Fantasy Park','Parc de distracții cu jocuri și atracții pentru toate vârstele, potrivit pentru o ieșire în familie.'),(21,9,'en','Fantasy Park','An amusement park with games and rides for all ages, great for a family outing.'),(22,10,'ro','Muzeul de Istorie și Arheologie al Olteniei','Expune piese arheologice și istorice din regiunea Olteniei, din epoca preistorică până în perioada modernă.'),(23,10,'en','Oltenia Museum of History and Archaeology','Displays archaeological and historical artifacts from the Oltenia region, from prehistoric times to the modern era.'),(24,11,'ro','Piața Mihai Viteazul','Piața centrală a Craiovei, punct de întâlnire animat, înconjurat de clădiri istorice și terase.'),(25,11,'en','Mihai Viteazul Square','Craiova\'s central square, a lively meeting point surrounded by historic buildings and terraces.'),(26,12,'ro','English Park','Parc amenajat în stil englezesc, cu alei liniștite, verdeață bogată și spații de relaxare.'),(27,12,'en','English Park','A park landscaped in the English style, with quiet paths, lush greenery and relaxing spaces.'),(28,13,'ro','Parcul Pedagogic','Spațiu verde liniștit, populat de păuni, potrivit pentru plimbări în aer liber.'),(29,13,'en','Pedagogic Park','A quiet green space, home to peacocks, ideal for outdoor walks.'),(30,14,'ro','Parcul Tineretului','Cel mai mare parc de agrement al orașului, cu lac, terenuri de sport și zone de joacă pentru copii.'),(31,14,'en','Youth Park','The city\'s largest recreational park, with a lake, sports fields and children\'s play areas.');
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
  `google_maps_url` varchar(500) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `show_on_homepage` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` (`id`, `distance_m`, `google_maps_url`, `image`, `show_on_homepage`, `created_at`) VALUES (1,130,'https://maps.app.goo.gl/kWudfoZ3BfZRpAWk6','teatru.jpg',1,'2026-05-07 10:25:07'),(3,280,'https://maps.app.goo.gl/94HFXh49fcPjWeVWA','centrul-vechi.jpeg',1,'2026-05-12 08:09:13'),(4,1600,'https://maps.app.goo.gl/H26jKQVM9yXJteBk8','stadion.jpeg',1,'2026-05-12 09:44:47'),(5,2100,'https://maps.app.goo.gl/J4KB8mRLuXFNbBV2A','parcul-nicolae-romanescu.jpg',1,'2026-05-12 09:56:27'),(6,500,'https://maps.app.goo.gl/VsPuqxujau2frRJ5A',NULL,0,CURRENT_TIMESTAMP),(7,1100,'https://maps.app.goo.gl/VEuY9Kf2j6S3woXF7',NULL,0,CURRENT_TIMESTAMP),(8,1000,'https://maps.app.goo.gl/HPzLsX2yPMPzE6b29',NULL,0,CURRENT_TIMESTAMP),(9,2100,'https://maps.app.goo.gl/HJzYU1og55YzKXpA7',NULL,0,CURRENT_TIMESTAMP),(10,850,'https://maps.app.goo.gl/vUH6zwMVGFwWf96b9',NULL,0,CURRENT_TIMESTAMP),(11,350,'https://maps.app.goo.gl/vK8iFAFoVGWxbf8i6',NULL,0,CURRENT_TIMESTAMP),(12,230,'https://maps.app.goo.gl/2xt4QirE6XS82W6A6',NULL,0,CURRENT_TIMESTAMP),(13,2100,'https://maps.app.goo.gl/CicrWCjinzsJLGPY6',NULL,0,CURRENT_TIMESTAMP),(14,3600,'https://maps.app.goo.gl/GETpfnBEnghgkyW7A',NULL,0,CURRENT_TIMESTAMP);
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `distance_m` int NOT NULL,
  `google_maps_url` varchar(500) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rating` decimal(2,1) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `recommended` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` (`id`, `name`, `distance_m`, `google_maps_url`, `rating`, `category`, `recommended`) VALUES (1,'Restaurant Ardelenesc Oșanu',260,'https://maps.app.goo.gl/YxvGWuhrQCAZEyr98',4.4,'Romanian',1),(2,'Trattoria 64',950,'https://maps.app.goo.gl/j1sgYEodM1pmHezE6',4.9,'Pizza',0),(3,'SteSo Restaurant',600,'https://maps.app.goo.gl/X9qqxbDRQvtTyzgF6',4.9,'Mediterranean',0),(4,'Artizan35',850,'https://maps.app.goo.gl/v7JJmD5UwoJ5gxbL8',4.5,'Contemporary',0),(5,'Craft',700,'https://maps.app.goo.gl/Pno7vgCySoc4SNAi7',4.6,'Fusion',0),(6,'The Manor Restaurant & Lounge',900,'https://maps.app.goo.gl/rntqywULNGreHxEE6',4.6,'Contemporary',0),(7,'Padella1895',800,'https://maps.app.goo.gl/bkxEyCRkdehu8x1G6',4.5,'Italian',0),(8,'Restaurant Voga Craiova',350,'https://maps.app.goo.gl/FJVjPeMarNmef6xj6',4.7,'International',0),(9,'Epoca Steak House & Wine Bar Restaurant',900,'https://maps.app.goo.gl/S3BrdyBDnY9VggmZ8',4.5,'Steakhouse',0),(10,'Casa Ghincea',700,'https://maps.app.goo.gl/SiyY1vT6HTheWxFB7',4.4,'Romanian',0),(11,'Nolla Brunch',700,'https://maps.app.goo.gl/SdZrSQXm4BxKQ1Zh7',4.9,'Brunch',0),(12,'Nobel Cuisine by Andrei Voica',700,'https://maps.app.goo.gl/izMcFNW4fWc35kRo9',4.5,'Fine Dining',0),(13,'Trattoria Il Calcio',950,'https://maps.app.goo.gl/4kRB72RUY6ZSieEv8',4.4,'Italian',0),(14,'La Papanu',160,'https://maps.app.goo.gl/ns49C5Cbupa4sNBy6',4.4,'Contemporary',0),(15,'Bottega del Vino',650,'https://maps.app.goo.gl/yP1YPrwC8CfsDMzWA',4.4,'Wine Bar',0),(16,'One Garden',400,'https://maps.app.goo.gl/CgnqpgLqGtkyZran7',4.2,'International',0),(17,'Sofia',650,'https://maps.app.goo.gl/HXr9qdq8tL4SWJSi8',4.3,'International',0),(18,'Downtown - Contemporary Bar & Food',350,'https://maps.app.goo.gl/Kfsb7HmQqBbZKwbV8',4.2,'Contemporary',0),(19,'Mr.Burger',400,'https://maps.app.goo.gl/FWPiEFGbNtoTZH399',4.8,'Burgers',0),(20,'Curtea Veche Biergarten',600,'https://maps.app.goo.gl/QngWwXv9528M75AS9',4.6,'Pub',0),(21,'Pho Chanh',350,'https://maps.app.goo.gl/6kPNp2kt26ouFR4t7',4.8,'Asian',0),(22,'Minerva by Bottega',600,'https://maps.app.goo.gl/27Lyck3ggP2M7E64A',4.0,'Dessert Shop',0),(23,'Sweets by Irina',210,'https://maps.app.goo.gl/NgM9qbfxvjRKimFh6',4.7,'Dessert Shop',0),(24,'ECLER by DesserTime',230,'https://maps.app.goo.gl/2SV94rVUiF2BWipn9',4.5,'Dessert Shop',1);
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
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
INSERT INTO `reviews` VALUES (1,'Guest 1','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:02:54',3),(2,'Guest 2','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:02:54',3),(3,'Guest 3','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:02:54',3),(4,'Guest 4','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:02:54',3),(5,'Guest 5','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:02:54',3),(6,'Guest 6','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:02:54',3),(7,'Guest 7','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:02:54',3),(8,'Guest 1','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:05:04',4),(9,'Guest 2','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:05:04',4),(10,'Guest 3','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:05:04',4),(11,'Guest 4','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:05:04',4),(12,'Guest 5','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:05:04',4),(13,'Guest 6','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:05:04',4),(14,'Guest 7','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:05:04',4),(15,'Guest 1','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:08:39',5),(16,'Guest 2','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:08:39',5),(17,'Guest 3','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:08:39',5),(18,'Guest 4','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:08:39',5),(19,'Guest 5','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:08:39',5),(20,'Guest 6','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:08:39',5),(21,'Guest 7','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:08:39',5),(22,'Guest 8','Italia',8,'The location was perfect and near Craiova\'s main street. The flat was clean and with all facilities \nThere is a little kitchen, if you want to eat in the flat, and a little balcony on the theatre\'s square.','The third floor without elevator','2026-06-05 15:08:39',5),(23,'Guest 9','Italia',10,'Allocato in centro citta ma non esposto al caos della movida, posizione perfetta.','','2026-06-05 15:08:39',5),(24,'Guest 10','Italia',10,'Appartamento Ben ristrutturato, con tutto il necessario.','','2026-06-05 15:08:39',5),(25,'Guest 11','Serbia',10,'Lokacija,apartman,higijena,domaćin,parking....sve je na vrhunskom nivou','','2026-06-05 15:08:39',5),(26,'Guest 12','Serbia',8,'Cistoca, sve je novo, divna posteljina.','Sve je biko super.','2026-06-05 15:08:39',5),(27,'Guest 13','România',10,'','','2026-06-05 15:08:39',5),(28,'Guest 14','România',10,'','','2026-06-05 15:08:39',5),(29,'Guest 15','România',9,'','','2026-06-05 15:08:39',5),(30,'Guest 16','România',9,'','','2026-06-05 15:08:39',5),(31,'Guest 17','Serbia',10,'','','2026-06-05 15:08:39',5),(32,'Guest 18','Grecia',10,'','','2026-06-05 15:08:39',5),(33,'Guest 19','Bulgaria',10,'','','2026-06-05 15:08:39',5),(34,'Guest 1','România',10,'Apartament cochet situat in centrul orașului Craiova foarte aproape de centrul vechi!','Totul a fost ok!','2026-06-05 15:18:53',6),(35,'Guest 2','România',10,'Locație excelentă, apartament f curat, gazdă f amabila','','2026-06-05 15:18:53',6),(36,'Guest 3','România',10,'Locația este excelentă! Este situată între primărie și teatrul național, se poate ajunge foarte ușor în centrul vechi sau se poate servi masa chiar la parterul blocului unde sunt trei localuri unde se poate lua masa!\nApartamentul este dotat cu tot ce am avut nevoie și este foarte confortabil pentru două persoane cum am fost noi!\nMulțumim frumos pentru găzduire!','','2026-06-05 15:18:53',6),(37,'Guest 4','Serbia',10,'Very clean apartment in city center, parking is near apartment, very polite host, everything was excellent!','','2026-06-05 15:18:53',6),(38,'Guest 5','Bulgaria',10,'The apartment is with an amazing location.  You can see the beauty of the city, the lights of the ferris wheel 🎡 and in our situation the fireworks for the new years eve from the balcony. The apartment is very warm with central heating and brand new furniture. It is very cozy and feels like home. We definitely love that place. The owner is very welcoming and answered all our questions before and during our trip and check-in. Also there was a free  parking spot next to the apartment. There are restaurants, pharmacy etc. very close. The central square is 500m from the apartment.','','2026-06-05 15:18:53',6),(39,'Guest 6','Bulgaria',10,'We had a one night stay, while visiting the Christmas market and this place was an amazing choice. Perfect location right at the merging spots for the start and the end of the market, clean, comfortable. We were a bit worried about the noise from the market at night, but at 22:00 all music was turned down and it was a really quiet night. Underground parking right next to the apartment. Surely will book it again for our next visit.','','2026-06-05 15:18:53',6),(40,'Guest 7','Serbia',10,'Great location, everything is very clean and decorated with lots of details. There are more than enough things to make your stay perfect!!','I have no complaints.','2026-06-05 15:18:53',6),(41,'Guest 8','Italia',8,'The location was perfect and near Craiova\'s main street. The flat was clean and with all facilities \nThere is a little kitchen, if you want to eat in the flat, and a little balcony on the theatre\'s square.','The third floor without elevator','2026-06-05 15:18:53',6),(42,'Guest 9','Italia',10,'Allocato in centro citta ma non esposto al caos della movida, posizione perfetta.','','2026-06-05 15:18:53',6),(43,'Guest 10','Italia',10,'Appartamento Ben ristrutturato, con tutto il necessario.','','2026-06-05 15:18:53',6),(44,'Guest 11','Serbia',10,'Lokacija,apartman,higijena,domaćin,parking....sve je na vrhunskom nivou','','2026-06-05 15:18:53',6),(45,'Guest 12','Serbia',8,'Cistoca, sve je novo, divna posteljina.','Sve je biko super.','2026-06-05 15:18:53',6),(46,'Guest 13','România',10,'','','2026-06-05 15:18:53',6),(47,'Guest 14','România',10,'','','2026-06-05 15:18:53',6),(48,'Guest 15','România',9,'','','2026-06-05 15:18:53',6),(49,'Guest 16','România',9,'','','2026-06-05 15:18:53',6),(50,'Guest 17','Serbia',10,'','','2026-06-05 15:18:53',6),(51,'Guest 18','Grecia',10,'','','2026-06-05 15:18:53',6),(52,'Guest 19','Bulgaria',10,'','','2026-06-05 15:18:53',6);
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
