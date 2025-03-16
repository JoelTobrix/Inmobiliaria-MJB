-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-03-2025 a las 11:56:15
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
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `idPropiedad` char(36) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `ubicacion` varchar(100) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `idUsuario` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `RollId` char(36) NOT NULL,
  `RoleNombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`RollId`, `RoleNombre`) VALUES
('', 'administrador'),
('3', 'cliente'),
('2', 'vendedor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userroltable`
--

CREATE TABLE `userroltable` (
  `RollId` char(36) NOT NULL,
  `idUsuario` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `userroltable`
--

INSERT INTO `userroltable` (`RollId`, `idUsuario`) VALUES
('', '873fed15-1c68-4296-abee-ae58279bbd7d'),
('3', 'be9cacb1-0d27-4943-8336-d5eccdc6e2ad');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usertable`
--

CREATE TABLE `usertable` (
  `IdUsuario` char(36) NOT NULL,
  `NombreUsuario` varchar(100) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Contraseña` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Active` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usertable`
--

INSERT INTO `usertable` (`IdUsuario`, `NombreUsuario`, `Nombre`, `Descripcion`, `Contraseña`, `Email`, `Active`) VALUES
('873fed15-1c68-4296-abee-ae58279bbd7d', 'admin', 'Pablo', 'administrar propiedades', '$2y$10$K1Vc6DWKcm1AwgmtrIiUbO1Ed6TwBa/mT5gMk1TGJnERrbWmrIJmK', 'pablofrancis1997@hotmail.com', 1),
('a7ba6437-7cb0-4ce0-99b5-d6fa798fbda8', 'vents', 'Pamela', 'Compradora', '$2y$10$sYIYRPXw0l4Gwctf4jLan.OAgUkmc1mORO3Mibsvj86klHs6qMKiK', 'pamocapana1235@gmail.com', 1),
('be9cacb1-0d27-4943-8336-d5eccdc6e2ad', 'Pam', 'Pamela', 'Hola', '$2y$10$O8UPwT1UHtl.8JAV9oFseuz98fQqlE3VCVq7nlw4cL3GKtGPDb2Bm', 'pansito007@gmail.com', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`idPropiedad`),
  ADD KEY `idUsuario` (`idUsuario`);

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
-- Filtros para la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD CONSTRAINT `propiedades_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usertable` (`IdUsuario`);

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
