-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 15 Mai 2016 à 16:35
-- Version du serveur :  5.6.16
-- Version de PHP :  5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `platformer`
--

-- --------------------------------------------------------

--
-- Structure de la table `followers`
--

CREATE TABLE IF NOT EXISTS `followers` (
  `id_follower` int(11) DEFAULT NULL,
  `id_followed` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `maps`
--

CREATE TABLE IF NOT EXISTS `maps` (
  `id_m` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` int(11) DEFAULT NULL,
  `tiles` text,
  `player` text,
  PRIMARY KEY (`id_m`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `maps`
--

INSERT INTO `maps` (`id_m`, `timestamp`, `tiles`, `player`) VALUES
(1, 1463221362, '[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,2,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]', '{"x":100,"y":100}');

-- --------------------------------------------------------

--
-- Structure de la table `runs`
--

CREATE TABLE IF NOT EXISTS `runs` (
  `id_r` int(11) NOT NULL AUTO_INCREMENT,
  `id_m` int(11) DEFAULT NULL,
  `id_u` int(11) DEFAULT NULL,
  `id_s` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `positions` text,
  `ranked` tinyint(1) DEFAULT NULL,
  `message` text,
  PRIMARY KEY (`id_r`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `runs`
--

INSERT INTO `runs` (`id_r`, `id_m`, `id_u`, `id_s`, `time`, `positions`, `ranked`, `message`) VALUES
(5, 1, 4, NULL, 1520, '[{"x":100,"y":100,"t":0},{"x":100,"y":108,"t":100},{"x":100,"y":123,"t":200},{"x":112,"y":141,"t":300},{"x":128,"y":161,"t":400},{"x":143,"y":182,"t":500},{"x":158,"y":203,"t":600},{"x":174,"y":225,"t":700},{"x":189,"y":246,"t":800},{"x":204,"y":268,"t":900},{"x":220,"y":226,"t":1000},{"x":235,"y":206,"t":1100},{"x":251,"y":206,"t":1200},{"x":266,"y":216,"t":1300},{"x":281,"y":230,"t":1400},{"x":287,"y":181,"t":1500},{"x":277,"y":170,"t":1583}]', 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `skins`
--

CREATE TABLE IF NOT EXISTS `skins` (
  `id_s` int(11) NOT NULL AUTO_INCREMENT,
  `title` int(11) DEFAULT NULL,
  `rarity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_s`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id_u` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` text,
  `elo` int(11) DEFAULT NULL,
  `xp` int(11) DEFAULT NULL,
  `golds` int(11) DEFAULT NULL,
  `gems` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_u`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id_u`, `login`, `password`, `token`, `elo`, `xp`, `golds`, `gems`) VALUES
(4, 'elbazia', '123', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibG9naW4iOiJlbGJhemlhIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE0NjI5MDg4Nzd9.Rc6-0UlRWb8feGKc-EoFkf7qk5BWzg5DvRt7tI4NaP8', NULL, NULL, NULL, NULL),
(5, 'elfilsdepute', 'lejuifnazi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibG9naW4iOiJlbGZpbHNkZXB1dGUiLCJwYXNzd29yZCI6ImxlanVpZm5hemkiLCJpYXQiOjE0NjI5MTE1ODV9.qTlua-SExY3UGdqgj6eFS1gPEWr0w80UAINp3JlO6Ig', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_skin`
--

CREATE TABLE IF NOT EXISTS `user_skin` (
  `id_us` int(11) NOT NULL AUTO_INCREMENT,
  `id_u` int(11) DEFAULT NULL,
  `id_s` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_us`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
