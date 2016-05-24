-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 24 Mai 2016 à 18:08
-- Version du serveur :  10.1.9-MariaDB
-- Version de PHP :  5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `platformer`
--

-- --------------------------------------------------------

--
-- Structure de la table `followers`
--

CREATE TABLE `followers` (
  `id_f` int(11) NOT NULL,
  `id_follower` int(11) DEFAULT NULL,
  `id_followed` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `maps`
--

CREATE TABLE `maps` (
  `id_m` int(11) NOT NULL,
  `timestamp` int(11) DEFAULT NULL,
  `tiles` text,
  `player` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `maps`
--

INSERT INTO `maps` (`id_m`, `timestamp`, `tiles`, `player`) VALUES
(1, 1463221362, '[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,2,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]', '{"x":100,"y":100}');

-- --------------------------------------------------------

--
-- Structure de la table `runs`
--

CREATE TABLE `runs` (
  `id_r` int(11) NOT NULL,
  `id_m` int(11) DEFAULT NULL,
  `id_u` int(11) DEFAULT NULL,
  `id_s` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `positions` text,
  `ranked` tinyint(1) DEFAULT NULL,
  `message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `runs`
--

INSERT INTO `runs` (`id_r`, `id_m`, `id_u`, `id_s`, `time`, `positions`, `ranked`, `message`) VALUES
(1, 1, 1, NULL, 1568, '[{"x":102,"y":100,"t":0},{"x":111,"y":108,"t":100},{"x":111,"y":123,"t":200},{"x":111,"y":141,"t":300},{"x":126,"y":161,"t":400},{"x":142,"y":181,"t":500},{"x":157,"y":203,"t":600},{"x":172,"y":225,"t":700},{"x":188,"y":246,"t":800},{"x":203,"y":268,"t":900},{"x":218,"y":270,"t":1000},{"x":234,"y":221,"t":1100},{"x":249,"y":205,"t":1200},{"x":264,"y":207,"t":1300},{"x":280,"y":218,"t":1400},{"x":286,"y":218,"t":1500},{"x":281,"y":176,"t":1600},{"x":278,"y":173,"t":1633}]', 1, NULL),
(2, 1, 2, NULL, 2864, '[{"x":97,"y":100,"t":0},{"x":86,"y":108,"t":100},{"x":86,"y":123,"t":200},{"x":98,"y":141,"t":300},{"x":112,"y":161,"t":400},{"x":112,"y":181,"t":500},{"x":102,"y":203,"t":600},{"x":112,"y":225,"t":700},{"x":128,"y":230,"t":800},{"x":143,"y":236,"t":900},{"x":147,"y":250,"t":1000},{"x":147,"y":267,"t":1100},{"x":147,"y":287,"t":1200},{"x":155,"y":308,"t":1300},{"x":170,"y":329,"t":1400},{"x":185,"y":330,"t":1500},{"x":201,"y":330,"t":1600},{"x":216,"y":330,"t":1700},{"x":231,"y":330,"t":1800},{"x":247,"y":330,"t":1900},{"x":262,"y":330,"t":2000},{"x":271,"y":281,"t":2100},{"x":255,"y":265,"t":2200},{"x":240,"y":267,"t":2300},{"x":231,"y":239,"t":2400},{"x":247,"y":210,"t":2500},{"x":262,"y":204,"t":2600},{"x":277,"y":212,"t":2700},{"x":288,"y":226,"t":2800},{"x":283,"y":192,"t":2900},{"x":273,"y":173,"t":2983}]', 1, NULL),
(3, 1, 3, NULL, 1968, '[{"x":102,"y":100,"t":0},{"x":111,"y":108,"t":100},{"x":111,"y":123,"t":200},{"x":113,"y":141,"t":300},{"x":129,"y":161,"t":400},{"x":144,"y":181,"t":500},{"x":155,"y":203,"t":600},{"x":145,"y":225,"t":700},{"x":142,"y":246,"t":800},{"x":157,"y":268,"t":900},{"x":173,"y":270,"t":1000},{"x":188,"y":270,"t":1100},{"x":203,"y":270,"t":1200},{"x":219,"y":258,"t":1300},{"x":234,"y":216,"t":1400},{"x":249,"y":204,"t":1500},{"x":265,"y":208,"t":1600},{"x":280,"y":221,"t":1700},{"x":295,"y":218,"t":1800},{"x":299,"y":176,"t":1900},{"x":284,"y":171,"t":2000},{"x":279,"y":173,"t":2050}]', 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `skins`
--

CREATE TABLE `skins` (
  `id_s` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `rarity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `skins`
--

INSERT INTO `skins` (`id_s`, `title`, `rarity`, `price`) VALUES
(1, '0-0', 0, 100),
(2, '0-1', 0, 100),
(3, '0-2', 0, 100),
(4, '0-3', 0, 100),
(5, '0-4', 0, 100),
(6, '0-5', 0, 100),
(7, '0-6', 0, 100),
(8, '0-7', 0, 100),
(9, '0-8', 0, 100),
(10, '0-9', 0, 100),
(11, '0-10', 0, 100),
(12, '0-11', 0, 100),
(13, '0-12', 0, 100),
(14, '0-13', 0, 100),
(15, '0-14', 0, 100),
(16, '0-15', 0, 100),
(17, '0-16', 0, 100),
(18, '0-17', 0, 100),
(19, '0-18', 0, 100),
(20, '0-19', 0, 100),
(21, '0-20', 0, 100),
(22, '0-21', 0, 100),
(23, '0-22', 0, 100),
(24, '0-23', 0, 100),
(25, '0-24', 0, 100),
(26, '0-25', 0, 100),
(27, '0-26', 0, 100),
(28, '0-27', 0, 100),
(29, '0-28', 0, 100),
(30, '0-29', 0, 100),
(31, '0-30', 0, 100),
(32, '0-31', 0, 100),
(33, '0-32', 0, 100),
(34, '0-33', 0, 100),
(35, '0-34', 0, 100),
(36, '0-35', 0, 100),
(37, '0-36', 0, 100),
(38, '0-37', 0, 100),
(39, '0-38', 0, 100),
(40, '0-39', 0, 100),
(41, '0-40', 0, 100),
(42, '0-41', 0, 100),
(43, '0-42', 0, 100),
(44, '0-43', 0, 100),
(45, '0-44', 0, 100),
(46, '0-45', 0, 100),
(47, '0-46', 0, 100),
(48, '0-47', 0, 100),
(49, '0-48', 0, 100),
(50, '0-49', 0, 100),
(51, '1-0', 1, 100),
(52, '1-1', 1, 100),
(53, '1-2', 1, 100),
(54, '1-3', 1, 100),
(55, '1-4', 1, 100),
(56, '1-5', 1, 100),
(57, '1-6', 1, 100),
(58, '1-7', 1, 100),
(59, '1-8', 1, 100),
(60, '1-9', 1, 100),
(61, '1-10', 1, 100),
(62, '1-11', 1, 100),
(63, '1-12', 1, 100),
(64, '1-13', 1, 100),
(65, '1-14', 1, 100),
(66, '1-15', 1, 100),
(67, '1-16', 1, 100),
(68, '1-17', 1, 100),
(69, '1-18', 1, 100),
(70, '1-19', 1, 100),
(71, '1-20', 1, 100),
(72, '1-21', 1, 100),
(73, '1-22', 1, 100),
(74, '1-23', 1, 100),
(75, '1-24', 1, 100),
(76, '1-25', 1, 100),
(77, '1-26', 1, 100),
(78, '1-27', 1, 100),
(79, '1-28', 1, 100),
(80, '1-29', 1, 100),
(81, '2-0', 2, 100),
(82, '2-1', 2, 100),
(83, '2-2', 2, 100),
(84, '2-3', 2, 100),
(85, '2-4', 2, 100),
(86, '2-5', 2, 100),
(87, '2-6', 2, 100),
(88, '2-7', 2, 100),
(89, '2-8', 2, 100),
(90, '2-9', 2, 100),
(91, '2-10', 2, 100),
(92, '2-11', 2, 100),
(93, '2-12', 2, 100),
(94, '2-13', 2, 100),
(95, '2-14', 2, 100),
(96, '2-15', 2, 100),
(97, '2-16', 2, 100),
(98, '2-17', 2, 100),
(99, '2-18', 2, 100),
(100, '2-19', 2, 100),
(101, '2-20', 2, 100),
(102, '2-21', 2, 100),
(103, '2-22', 2, 100),
(104, '2-23', 2, 100),
(105, '2-24', 2, 100),
(106, '2-25', 2, 100),
(107, '2-26', 2, 100),
(108, '2-27', 2, 100),
(109, '2-28', 2, 100),
(110, '2-29', 2, 100),
(111, '3-0', 3, 100),
(112, '3-1', 3, 100),
(113, '3-2', 3, 100),
(114, '3-3', 3, 100),
(115, '3-4', 3, 100),
(116, '3-5', 3, 100),
(117, '3-6', 3, 100),
(118, '3-7', 3, 100),
(119, '3-8', 3, 100),
(120, '3-9', 3, 100),
(121, '3-10', 3, 100),
(122, '3-11', 3, 100),
(123, '3-12', 3, 100),
(124, '3-13', 3, 100),
(125, '3-14', 3, 100),
(126, '3-15', 3, 100),
(127, '3-16', 3, 100),
(128, '3-17', 3, 100),
(129, '3-18', 3, 100),
(130, '3-19', 3, 100),
(131, '3-20', 3, 100),
(132, '3-21', 3, 100),
(133, '3-22', 3, 100),
(134, '3-23', 3, 100),
(135, '3-24', 3, 100),
(136, '3-25', 3, 100),
(137, '3-26', 3, 100),
(138, '3-27', 3, 100),
(139, '3-28', 3, 100),
(140, '3-29', 3, 100);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_u` int(11) NOT NULL,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` text,
  `elo` int(11) DEFAULT NULL,
  `sigma` int(11) DEFAULT NULL,
  `xp` int(11) DEFAULT NULL,
  `golds` int(11) DEFAULT NULL,
  `gems` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id_u`, `login`, `password`, `token`, `elo`, `sigma`, `xp`, `golds`, `gems`) VALUES
(1, 'elbazia', 'aze', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibG9naW4iOiJlbGJhemlhIiwicGFzc3dvcmQiOiJhemUiLCJpYXQiOjE0NjQwODE1MTl9.OfPqyjKSZieMpZE0HvLwyzhE_kEX-7CYh84VFs3eIgo', 2137, 255, 2500, 2500, 0),
(2, 'elgringo', 'aze', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibG9naW4iOiJlbGdyaW5nbyIsInBhc3N3b3JkIjoiYXplIiwiaWF0IjoxNDY0MDgxNTY5fQ.ecdH90SCSsev-jLsPq--ZJnIJpRb2OC86rHKy2IFnSc', 863, 255, 500, 500, 0),
(3, 'coco', 'aze', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywibG9naW4iOiJjb2NvIiwicGFzc3dvcmQiOiJhemUiLCJpYXQiOjE0NjQwODE2MTB9.DOKbxsYqdlp-cbNJQ1KBtU3QqCLn6qZRiSFiw2H3SNs', 1500, 204, 1500, 1500, 0);

-- --------------------------------------------------------

--
-- Structure de la table `user_skin`
--

CREATE TABLE `user_skin` (
  `id_us` int(11) NOT NULL,
  `id_u` int(11) DEFAULT NULL,
  `id_s` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id_f`);

--
-- Index pour la table `maps`
--
ALTER TABLE `maps`
  ADD PRIMARY KEY (`id_m`);

--
-- Index pour la table `runs`
--
ALTER TABLE `runs`
  ADD PRIMARY KEY (`id_r`);

--
-- Index pour la table `skins`
--
ALTER TABLE `skins`
  ADD PRIMARY KEY (`id_s`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_u`);

--
-- Index pour la table `user_skin`
--
ALTER TABLE `user_skin`
  ADD PRIMARY KEY (`id_us`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `followers`
--
ALTER TABLE `followers`
  MODIFY `id_f` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `maps`
--
ALTER TABLE `maps`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `runs`
--
ALTER TABLE `runs`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `skins`
--
ALTER TABLE `skins`
  MODIFY `id_s` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user_skin`
--
ALTER TABLE `user_skin`
  MODIFY `id_us` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
