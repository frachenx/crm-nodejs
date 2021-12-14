-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2021 a las 09:58:59
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`admin_id`, `admin_name`, `admin_password`) VALUES
(1, 'admin', '$2y$10$elKINr6bLaKCFFQ89zQkpOov.aVKE3Bp7HnZ0I/iOHJ/CxF8tRnyS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logins`
--

CREATE TABLE `logins` (
  `login_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `login_date` datetime NOT NULL,
  `login_ip` varchar(255) NOT NULL,
  `login_mac` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `logins`
--

INSERT INTO `logins` (`login_id`, `user_id`, `login_date`, `login_ip`, `login_mac`) VALUES
(1, 2, '2021-11-13 05:26:40', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(2, 2, '2021-11-13 06:09:24', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(3, 2, '2021-11-13 06:23:35', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(4, 3, '2021-11-13 17:45:44', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(5, 2, '2021-11-20 18:55:09', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(6, 2, '2021-11-20 19:35:37', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(7, 2, '2021-11-23 03:33:28', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(8, 2, '2021-11-23 21:39:33', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(9, 2, '2021-11-25 01:56:50', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(10, 2, '2021-11-26 03:26:16', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(11, 2, '2021-11-27 00:36:09', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(12, 2, '2021-11-28 05:14:24', '::1', '7C-50-79-37-A3-10   Medios desconectados'),
(13, 2, '2021-11-29 07:09:12', '127.0.0.1', '7C-50-79-37-A3-10   Medios desconectados'),
(14, 2, '2021-12-13 09:51:35', '::1', '7C-50-79-37-A3-10   Medios desconectados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `quotes`
--

CREATE TABLE `quotes` (
  `quote_id` int(11) NOT NULL,
  `quote_name` varchar(255) NOT NULL,
  `quote_email` varchar(255) NOT NULL,
  `quote_contact` varchar(255) NOT NULL,
  `quote_company` varchar(255) NOT NULL,
  `webDesign` tinyint(1) NOT NULL,
  `cms` tinyint(1) NOT NULL,
  `seo` tinyint(1) NOT NULL,
  `smo` tinyint(1) NOT NULL,
  `staticWeb` tinyint(1) NOT NULL,
  `dynamicWeb` tinyint(1) NOT NULL,
  `flashWeb` tinyint(1) NOT NULL,
  `domainReg` tinyint(1) NOT NULL,
  `webHosting` tinyint(1) NOT NULL,
  `webMaintenance` tinyint(1) NOT NULL,
  `ecomm` tinyint(1) NOT NULL,
  `animation` tinyint(1) NOT NULL,
  `payment` tinyint(1) NOT NULL,
  `logo` tinyint(1) NOT NULL,
  `dashboard` tinyint(1) NOT NULL,
  `openSource` tinyint(1) NOT NULL,
  `newsLetter` tinyint(1) NOT NULL,
  `other` tinyint(1) NOT NULL,
  `query` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `post_date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `quotes`
--

INSERT INTO `quotes` (`quote_id`, `quote_name`, `quote_email`, `quote_contact`, `quote_company`, `webDesign`, `cms`, `seo`, `smo`, `staticWeb`, `dynamicWeb`, `flashWeb`, `domainReg`, `webHosting`, `webMaintenance`, `ecomm`, `animation`, `payment`, `logo`, `dashboard`, `openSource`, `newsLetter`, `other`, `query`, `remark`, `post_date`, `status`) VALUES
(1, 'JONATHAN', 'TEST@GMAIL.COM', '555555555', '', 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', 'Test Remark', '2021-11-14 05:35:13', 'CLOSED'),
(2, 'Name', 'Email@gmail.com', '55 555 5555', '-', 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 'Query Test', '', '2021-11-26 10:00:41', ''),
(3, 'ALBERT', 'test3@gmail.com', '55 555 5555', '', 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 'TEST QUERY', 'Remark1010', '2021-11-26 10:08:03', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `ticket_id` int(11) NOT NULL,
  `ticket_title` varchar(255) NOT NULL,
  `ticket_task` varchar(255) NOT NULL,
  `ticket_priority` varchar(255) NOT NULL,
  `ticket_description` varchar(255) NOT NULL,
  `ticket_admin_remark` varchar(255) NOT NULL,
  `ticket_admin_remark_date` datetime NOT NULL,
  `ticket_attachment` varchar(255) NOT NULL,
  `ticket_post_date` datetime NOT NULL,
  `ticket_status` varchar(255) NOT NULL,
  `ticket_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`ticket_id`, `ticket_title`, `ticket_task`, `ticket_priority`, `ticket_description`, `ticket_admin_remark`, `ticket_admin_remark_date`, `ticket_attachment`, `ticket_post_date`, `ticket_status`, `ticket_email`) VALUES
(5, 'TEST', 'billing', 'important', 'TEST', 'Remark222\r\n', '0000-00-00 00:00:00', '', '2021-11-12 20:22:42', 'CLOSED', 'TEST@GMAIL.COM'),
(6, 'TEST', 'billing', 'important', 'TEST', 'Remark\r\n', '0000-00-00 00:00:00', '', '2021-11-12 20:52:38', 'CLOSED', 'TEST@GMAIL.COM'),
(8, 'Task-2240', 'billing', 'important', 'Description-2240', '', '0000-00-00 00:00:00', '', '2021-11-27 00:26:15', '', 'TEST@GMAIL.COM'),
(9, 'Task-001', 'billing', 'important', 'Description22', 'Rekarmk', '0000-00-00 00:00:00', '', '2021-11-27 00:27:20', 'CLOSED', 'TEST@GMAIL.COM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_alt_email` varchar(255) NOT NULL,
  `user_gender` varchar(100) NOT NULL,
  `user_contact` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_created_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_address`, `user_email`, `user_alt_email`, `user_gender`, `user_contact`, `user_name`, `user_password`, `user_created_date`) VALUES
(2, 'MEXICO,MEXICO,MEXICO', 'TEST@GMAIL.COM', 'TEST2@GMAIL.COM', 'male', '555555555', 'JONATHAN', '$2y$10$8SswOVNgx5mYsHVXhc9Dr.65p6D5ZQf6qWf/wyZKFsoz54HFcRJ/m', '2021-11-13 07:54:53');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indices de la tabla `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`login_id`);

--
-- Indices de la tabla `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`quote_id`);

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `logins`
--
ALTER TABLE `logins`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `quotes`
--
ALTER TABLE `quotes`
  MODIFY `quote_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticket_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
