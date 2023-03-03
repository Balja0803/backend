-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 02, 2023 at 05:55 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

DROP DATABASE IF EXISTS ecommerce;
CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;





/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (

  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `role` enum('admin','moderator','user') NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL UNIQUE,
  `contact` varchar(255) DEFAULT NULL,
  `address_1` varchar(255) NOT NULL,
  `address_2` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `register_date` date NOT NULL
) AUTO_INCREMENT=10000;

--
CREATE TABLE `category` (
   `id` INT auto_increment,
   `name` VARCHAR(255) NOT NULL,
  `primary` key(id)) AUTO_INCREMENT=1000;
-- Indexes for dumped tables
--
CREATE TABLE `brand` (
    `id` INT auto_increment,
    `name` VARCHAR(255) NOT NULL,
    `primary` key(id)) AUTO_INCREMENT=2000;
--
-- Indexes for table `user`
--
CREATE TABLE `product` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
   `brand_id` INT,
  `category_id` INT,
  `created_date` DATE,
  `description` VARCHAR(255) NOT NULL,
  `sale` VARCHAR(255) NOT NULL,
  `price` DOUBLE NOT NULL,
  `stock` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `primary` key(id),
  `foreign` key(brand_id) REFERENCES brand(id),
  `foreign` key(category_id) REFERENCES category(id)
  );


--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
