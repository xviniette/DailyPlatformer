-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 11 Mai 2016 à 23:15
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
-- Structure de la table `maps`
--

CREATE TABLE IF NOT EXISTS `maps` (
  `id_m` int(11) NOT NULL AUTO_INCREMENT,
  `tiles` text,
  PRIMARY KEY (`id_m`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `maps`
--

INSERT INTO `maps` (`id_m`, `tiles`) VALUES
(1, '[[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]]'),
(2, 'qsdqsd');

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
  `inputs` text,
  `ranked` tinyint(1) DEFAULT NULL,
  `message` text,
  PRIMARY KEY (`id_r`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

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
  PRIMARY KEY (`id_u`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id_u`, `login`, `password`, `token`) VALUES
(4, 'elbazia', '123', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibG9naW4iOiJlbGJhemlhIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE0NjI5MDg4Nzd9.Rc6-0UlRWb8feGKc-EoFkf7qk5BWzg5DvRt7tI4NaP8'),
(5, 'elfilsdepute', 'lejuifnazi', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibG9naW4iOiJlbGZpbHNkZXB1dGUiLCJwYXNzd29yZCI6ImxlanVpZm5hemkiLCJpYXQiOjE0NjI5MTE1ODV9.qTlua-SExY3UGdqgj6eFS1gPEWr0w80UAINp3JlO6Ig'),
(6, 'qsdq', 'fqfq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6InFzZHEiLCJwYXNzd29yZCI6ImZxZnEiLCJpZCI6NiwiaWF0IjoxNDYyOTk5MzkwfQ.OsQZROUFMbmBvdIhFsrGthU5C_D3gmNrkHwcf7dsrPc');

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
