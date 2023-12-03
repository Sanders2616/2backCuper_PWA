CREATE DATABASE  IF NOT EXISTS `back_cuper` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `back_cuper`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: back_cuper
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bebidas`
--

DROP TABLE IF EXISTS `bebidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bebidas` (
  `id_bebida` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_bebida`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bebidas`
--

LOCK TABLES `bebidas` WRITE;
/*!40000 ALTER TABLE `bebidas` DISABLE KEYS */;
INSERT INTO `bebidas` VALUES (1,'Boing 350 ml',15.00),(2,'Coca Cola',20.00),(3,'Jarrito',20.00),(4,'Sangria',20.00),(5,'Sprite',20.00);
/*!40000 ALTER TABLE `bebidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalleticket`
--

DROP TABLE IF EXISTS `detalleticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalleticket` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `id_ticket` int DEFAULT NULL,
  `id_platillo` int DEFAULT NULL,
  `id_bebida` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `observaciones` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_ticket` (`id_ticket`),
  KEY `id_platillo` (`id_platillo`),
  KEY `id_bebida` (`id_bebida`),
  CONSTRAINT `detalleticket_ibfk_1` FOREIGN KEY (`id_ticket`) REFERENCES `tickets` (`id_ticket`),
  CONSTRAINT `detalleticket_ibfk_2` FOREIGN KEY (`id_platillo`) REFERENCES `platillos` (`id_platillo`),
  CONSTRAINT `detalleticket_ibfk_3` FOREIGN KEY (`id_bebida`) REFERENCES `bebidas` (`id_bebida`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalleticket`
--

LOCK TABLES `detalleticket` WRITE;
/*!40000 ALTER TABLE `detalleticket` DISABLE KEYS */;
INSERT INTO `detalleticket` VALUES (1,1,2,NULL,3,NULL),(2,1,NULL,2,3,NULL),(3,2,3,NULL,4,NULL),(4,2,NULL,3,4,NULL),(5,3,4,NULL,5,NULL),(6,3,NULL,4,5,NULL),(7,4,4,NULL,5,NULL),(8,4,NULL,4,5,NULL),(9,5,1,NULL,2,'sin cebolla'),(10,5,NULL,1,1,NULL),(11,6,3,NULL,4,'s/salsa, s/q'),(12,6,NULL,2,5,NULL),(13,7,3,NULL,4,'s/salsa, s/q'),(14,7,NULL,2,5,NULL);
/*!40000 ALTER TABLE `detalleticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mesas`
--

DROP TABLE IF EXISTS `mesas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mesas` (
  `id_mesa` int NOT NULL AUTO_INCREMENT,
  `numero_mesa` int NOT NULL,
  `id_mesero` int DEFAULT NULL,
  `total_ventas` decimal(10,2) DEFAULT '0.00',
  PRIMARY KEY (`id_mesa`),
  KEY `id_mesero` (`id_mesero`),
  CONSTRAINT `mesas_ibfk_1` FOREIGN KEY (`id_mesero`) REFERENCES `meseros` (`id_mesero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mesas`
--

LOCK TABLES `mesas` WRITE;
/*!40000 ALTER TABLE `mesas` DISABLE KEYS */;
INSERT INTO `mesas` VALUES (1,1,1,0.00),(2,2,2,0.00),(3,3,3,0.00);
/*!40000 ALTER TABLE `mesas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meseros`
--

DROP TABLE IF EXISTS `meseros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meseros` (
  `id_mesero` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id_mesero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meseros`
--

LOCK TABLES `meseros` WRITE;
/*!40000 ALTER TABLE `meseros` DISABLE KEYS */;
INSERT INTO `meseros` VALUES (1,'Montserrat'),(2,'Maleni'),(3,'Miguel');
/*!40000 ALTER TABLE `meseros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platillos`
--

DROP TABLE IF EXISTS `platillos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `platillos` (
  `id_platillo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_platillo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platillos`
--

LOCK TABLES `platillos` WRITE;
/*!40000 ALTER TABLE `platillos` DISABLE KEYS */;
INSERT INTO `platillos` VALUES (1,'Enchiladas',22.00),(2,'Molotes',22.00),(3,'Tostadas',22.00),(4,'Gorditas',22.00),(5,'Chalupas',22.00),(6,'Tacos Dorados',22.00),(7,'Patita de Puerco',20.00),(8,'Pata de pollo',12.00),(9,'Huevo Duro',8.00),(10,'Quesadilla',18.00);
/*!40000 ALTER TABLE `platillos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id_ticket` int NOT NULL AUTO_INCREMENT,
  `id_mesa` int DEFAULT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `confirmado` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_ticket`),
  KEY `id_mesa` (`id_mesa`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`id_mesa`) REFERENCES `mesas` (`id_mesa`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,1,'2023-11-21 02:10:07',1),(2,2,'2023-11-21 02:10:19',1),(3,3,'2023-11-21 02:10:31',1),(4,1,'2023-11-21 02:17:06',1),(5,1,'2023-12-03 07:50:57',1),(6,2,'2023-12-03 07:51:59',1),(7,2,'2023-12-03 07:53:28',1);
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_ticket_confirmado` AFTER UPDATE ON `tickets` FOR EACH ROW BEGIN
    IF NEW.confirmado = TRUE THEN
        INSERT INTO VentasDiarias (fecha, total_venta)
        SELECT DATE(NEW.fecha), 
               SUM(COALESCE((SELECT precio FROM Platillos WHERE id_platillo = dt.id_platillo), 0) * COALESCE(dt.cantidad, 0))
               + SUM(COALESCE((SELECT precio FROM Bebidas WHERE id_bebida = dt.id_bebida), 0) * COALESCE(dt.cantidad, 0))
        FROM DetalleTicket dt
        WHERE dt.id_ticket = NEW.id_ticket;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `ventasdiarias`
--

DROP TABLE IF EXISTS `ventasdiarias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventasdiarias` (
  `id_venta` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `total_venta` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_venta`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventasdiarias`
--

LOCK TABLES `ventasdiarias` WRITE;
/*!40000 ALTER TABLE `ventasdiarias` DISABLE KEYS */;
INSERT INTO `ventasdiarias` VALUES (1,'2023-11-21',126.00),(2,'2023-11-21',168.00),(3,'2023-11-21',210.00),(4,'2023-11-21',210.00),(5,'2023-12-03',59.00),(6,'2023-12-03',188.00),(7,'2023-12-03',188.00);
/*!40000 ALTER TABLE `ventasdiarias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vistaventasdiarias`
--

DROP TABLE IF EXISTS `vistaventasdiarias`;
/*!50001 DROP VIEW IF EXISTS `vistaventasdiarias`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vistaventasdiarias` AS SELECT 
 1 AS `numero_mesa`,
 1 AS `fecha`,
 1 AS `total_venta`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'back_cuper'
--

--
-- Dumping routines for database 'back_cuper'
--

--
-- Final view structure for view `vistaventasdiarias`
--

/*!50001 DROP VIEW IF EXISTS `vistaventasdiarias`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vistaventasdiarias` AS select `m`.`numero_mesa` AS `numero_mesa`,`t`.`fecha` AS `fecha`,sum((coalesce((`p`.`precio` * `dt`.`cantidad`),0) + coalesce((`b`.`precio` * `dt`.`cantidad`),0))) AS `total_venta` from ((((`mesas` `m` join `tickets` `t` on((`m`.`id_mesa` = `t`.`id_mesa`))) join `detalleticket` `dt` on((`t`.`id_ticket` = `dt`.`id_ticket`))) left join `platillos` `p` on((`dt`.`id_platillo` = `p`.`id_platillo`))) left join `bebidas` `b` on((`dt`.`id_bebida` = `b`.`id_bebida`))) where (`t`.`confirmado` = true) group by `m`.`numero_mesa`,`t`.`fecha` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-03  1:55:36
