-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 10-03-2025 a las 22:48:49
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

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`RollId`, `RoleNombre`) VALUES
('', 'administrador'),
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
('', 'fbe6d723-a624-4c7a-8eef-25b7ef271295');

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
('074b49dc-f5b7-4404-a4a5-f3885b6e5830', 'admin1', 'Fabricio', 'administrador', '$2y$10$3Tg1p0DAe2qqYwjlMNFf3.z5.A5cSq3YluT4hYVig8Y5nrGjjgbEy', 'febri145@gmail.com', 0),
('85266aa5-f262-4261-a883-446660c22cf3', 'admin2', 'Maria', 'vendedora', '$2y$10$/FPk56.gQuNzoujX8fvJHuNXZXOM3PqIOsllG8EqHXruUS2xal2.u', 'meri33@gmail.com', 0),
('fbe6d723-a624-4c7a-8eef-25b7ef271295', 'cliente', 'Alejandra', 'Compradora', '$2y$10$Vr4UF2qXNGhZ2iHQ6rZLsuFyd89lITEudEkSVQxidLSPY2zuABTWW', 'alej123@gmail.com', 1);

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
