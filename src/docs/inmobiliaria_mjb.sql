-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 26-02-2025 a las 00:41:29
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inmobiliaria_mjb`
--
CREATE DATABASE IF NOT EXISTS `inmobiliaria_mjb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `inmobiliaria_mjb`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `RollId` char(36) NOT NULL,
  `RoleNombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userroltable`
--

CREATE TABLE `userroltable` (
  `RollId` char(36) NOT NULL,
  `idUsuario` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usertable`
--

CREATE TABLE `usertable` (
  `IdUsuario` char(36) NOT NULL,
  `NombreUsuario` varchar(100) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Contraseña` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Active` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RollId`),
  ADD UNIQUE KEY `RoleNombre` (`RoleNombre`);

--
-- Indices de la tabla `userroltable`
--
ALTER TABLE `userroltable`
  ADD PRIMARY KEY (`RollId`,`idUsuario`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`IdUsuario`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `userroltable`
--
ALTER TABLE `userroltable`
  ADD CONSTRAINT `userroltable_ibfk_1` FOREIGN KEY (`RollId`) REFERENCES `roles` (`RollId`),
  ADD CONSTRAINT `userroltable_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usertable` (`IdUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
