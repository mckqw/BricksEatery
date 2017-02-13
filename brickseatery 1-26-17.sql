-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2017 at 11:22 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brickseatery`
--
CREATE DATABASE IF NOT EXISTS `brickseatery` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `brickseatery`;

-- --------------------------------------------------------

--
-- Table structure for table `burgersaddons`
--

DROP TABLE IF EXISTS `burgersaddons`;
CREATE TABLE `burgersaddons` (
  `BAOID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `burgersaddons`
--

INSERT INTO `burgersaddons` (`BAOID`, `Name`, `Price`) VALUES
(1, 'Bacon', 1),
(2, 'Avocado', 1),
(4, 'Egg', 1),
(5, 'Onion Ring', 1),
(6, 'Cheese Curds', 2),
(8, 'Blue Cheese', 1),
(9, 'Cheddar Cheese', 1),
(10, 'American Cheese', 1),
(11, 'Swiss Cheese', 1),
(12, 'Pepper Jack Cheese', 1);

-- --------------------------------------------------------

--
-- Table structure for table `burgerstoppings`
--

DROP TABLE IF EXISTS `burgerstoppings`;
CREATE TABLE `burgerstoppings` (
  `BTID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `burgerstoppings`
--

INSERT INTO `burgerstoppings` (`BTID`, `Name`) VALUES
(1, 'Grilled Onions'),
(2, 'Raw Onions'),
(3, 'Grilled Chilies'),
(4, 'Caramelized Onions'),
(5, 'Grilled Pineapple'),
(6, 'Lettuce'),
(7, 'Tomatoes'),
(8, 'Crispy Onions'),
(9, 'Pico De Gallo'),
(10, 'Pickles'),
(11, 'Pesto Sauce'),
(12, 'Spicy Mayo'),
(13, 'Poblano Sauce');

-- --------------------------------------------------------

--
-- Table structure for table `contactinfo`
--

DROP TABLE IF EXISTS `contactinfo`;
CREATE TABLE `contactinfo` (
  `ContactID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Notes` varchar(5000) NOT NULL,
  `TimeStap` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactinfo`
--

INSERT INTO `contactinfo` (`ContactID`, `Name`, `Email`, `Notes`, `TimeStap`) VALUES
(1, '', '', '', '2017-01-12 00:43:18'),
(2, 'Matthew Clark', 'bass1player@gmail.com', 'I like it!', '2017-01-12 00:43:45'),
(3, 'Matthew Clark', 'bass1player@gmail.com', 'fgsujaifbdlkaj', '2017-01-13 01:16:42'),
(4, 'mTT', 'nvfdsavcd@gmail.vocom', 'vfw', '2017-01-18 16:47:24');

-- --------------------------------------------------------

--
-- Table structure for table `itemoptions`
--

DROP TABLE IF EXISTS `itemoptions`;
CREATE TABLE `itemoptions` (
  `OptionID` int(11) NOT NULL,
  `OptionName` varchar(50) NOT NULL,
  `Options` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itemoptions`
--

INSERT INTO `itemoptions` (`OptionID`, `OptionName`, `Options`) VALUES
(1, 'house burger', 'bun-s[Regular(0),Gluten Free(1),Wheat(1),Pretzel(1selected)]+\npatty-s[Beef(1selected),Turkey(1),Veggie(1),Grass Fed(3)]+\naddons-m[Egg(1),Avocado(1),Bacon(1),Side Salad(1)]+\ncheese-s[Swiss Cheese(1),American Cheese(1)]+\ntoppings-m[Grilled Onions(),Raw Onions(),Grilled Chilies(),Caramelized Onions(),Grilled Pineapple(),Lettuce(),Tomatoes(),Crispy Onions(),Pico De Gallo(),Pickles(),Pesto Sauce(),Spicy Mayo(),Poblano Sauce()]\n'),
(2, 'Bricks Burger', 'bun-s[Regular(0),Gluten Free(1),Wheat(1),Pretzel(1selected)]+\npatty-s[Beef(1selected),Turkey(1),Veggie(1),Grass Fed(3)]+\naddons-m[Egg(1),Avocado(1),Side Salad(1)]+\ncheese-s[Swiss Cheese(1),American Cheese(1)]+\ntoppings-m[Grilled Onions(),Raw Onions(),Grilled Chilies(),Caramelized Onions(),Grilled Pineapple(),Lettuce(),Tomatoes(),Crispy Onions(),Pico De Gallo(),Pickles(),Pesto Sauce(),Spicy Mayo(),Poblano Sauce()]\n');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `ItemID` int(11) NOT NULL,
  `ItemName` varchar(50) NOT NULL,
  `ItemDescription` varchar(1000) NOT NULL,
  `Price` int(11) NOT NULL,
  `TimeCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `PictureURL` varchar(1000) NOT NULL,
  `ItemTypeID` int(11) NOT NULL,
  `OptionName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`ItemID`, `ItemName`, `ItemDescription`, `Price`, `TimeCreated`, `PictureURL`, `ItemTypeID`, `OptionName`) VALUES
(1, 'Bricks Burger', 'Bacon, Caramelized Onion, Swiss Cheese, Grilled Jalapenos, Arugala ', 10, '2017-01-22 05:27:03', 'http://localhost/BricksEatery/Pictures/bricksburger.jpg', 1, 'Bricks Burger'),
(2, 'Fried Cauliflower', 'Savory Bacon-Battered Cauliflower, served with House Made Spicy Mayo Sauce', 6, '2016-12-27 14:53:14', '', 5, ''),
(3, 'House Burger', 'Lettuce, Tomatoes, Red Onion, Thousand Island', 10, '2017-01-22 04:14:28', '', 1, 'house burger'),
(4, 'Vermont Burger', 'Bacon, Caramelized Onions, Swiss Cheese, Grilled Japelpenos', 11, '2017-01-09 01:11:48', '', 1, ''),
(5, 'Cali Burger', 'Bacon, Pepper Jack, Grilled Pineapple, Teriyaki Sauce', 11, '2016-12-29 21:45:30', '', 1, ''),
(6, 'Bacon Blue Burger', 'Bacon, Blue Cheese, Onion Ring, Lettuce, Tomatoes, Garlic Aioli, BBQ Sauce', 13, '2016-12-29 21:46:34', '', 1, ''),
(7, 'Portobello Burger', 'Beef Patty, Portobello Mushroom, Swiss Cheese, Caramelized Onions, Balsamic Aioli', 12, '2016-12-29 21:48:28', '', 1, ''),
(8, 'Tater Tots', 'There whad you think they were?', 6, '2017-01-06 17:02:25', '', 5, ''),
(9, 'House Salad', 'Mixed Greens, Tomatoes, Tangerines, Balsamic Vinaigrette', 5, '2017-01-11 23:33:14', '', 3, ''),
(10, 'Street Dog', 'Bacon Wrapped Hot Dog, Grilled Onions, Bell Peppers, Chipotle Mayo', 8, '2017-01-12 02:13:01', '', 2, ''),
(11, 'Turkey Pesto', 'Swiss, Tomatoes, Pesto Sauce', 12, '2017-01-12 02:17:52', '', 2, '');

-- --------------------------------------------------------

--
-- Table structure for table `menutype`
--

DROP TABLE IF EXISTS `menutype`;
CREATE TABLE `menutype` (
  `MenuTypeID` int(11) NOT NULL,
  `ItemTypeID` int(11) NOT NULL,
  `ItemTypeName` varchar(50) NOT NULL,
  `ItemTypeDescription` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menutype`
--

INSERT INTO `menutype` (`MenuTypeID`, `ItemTypeID`, `ItemTypeName`, `ItemTypeDescription`) VALUES
(1, 1, 'Burgers', 'a sandwich which has meat, cheese and a bun'),
(2, 2, 'Sandwich', 'A more creative burger'),
(3, 3, 'Salad', 'My foods food'),
(4, 4, 'Tacos', 'MMMMMM So Good!'),
(5, 5, 'Sides', 'What is a Burger without the side?'),
(6, 6, 'Desserts', 'The best part of the meal, the end!'),
(7, 7, 'Beverages', 'Its not a burger, its not a sandwich, its a drink!'),
(8, 8, 'Beer', 'Just so alcholly'),
(9, 9, 'Shakes', 'Too sweet for me!');

-- --------------------------------------------------------

--
-- Table structure for table `resettokens`
--

DROP TABLE IF EXISTS `resettokens`;
CREATE TABLE `resettokens` (
  `token` varchar(40) NOT NULL COMMENT 'The Unique Token Generated',
  `uid` int(11) NOT NULL COMMENT 'The User Id',
  `requested` varchar(20) NOT NULL COMMENT 'The Date when token was created'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sandwichaddons`
--

DROP TABLE IF EXISTS `sandwichaddons`;
CREATE TABLE `sandwichaddons` (
  `SAID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sandwichaddons`
--

INSERT INTO `sandwichaddons` (`SAID`, `Name`, `Price`) VALUES
(1, 'Bacon', 1),
(2, 'Swiss', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sandwichtoppings`
--

DROP TABLE IF EXISTS `sandwichtoppings`;
CREATE TABLE `sandwichtoppings` (
  `STID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sandwichtoppings`
--

INSERT INTO `sandwichtoppings` (`STID`, `Name`) VALUES
(1, 'Grilled Onions'),
(2, 'Bell Peppers'),
(3, 'Red Onions'),
(4, 'Tomatoes'),
(5, 'Green Chillies'),
(6, 'Lettuce'),
(7, 'Caramelized Onions'),
(8, 'Cilantro'),
(9, 'Cucumber'),
(10, 'Mixed Greens'),
(11, 'Jalapenos');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` tinytext NOT NULL,
  `password` varchar(64) NOT NULL,
  `password_salt` varchar(20) NOT NULL,
  `created` datetime NOT NULL,
  `attempt` varchar(15) NOT NULL DEFAULT '0',
  `phone` varchar(100) NOT NULL,
  `street` varchar(1000) NOT NULL,
  `city` varchar(1000) NOT NULL,
  `state` varchar(1000) NOT NULL,
  `zip` varchar(1000) NOT NULL,
  `options` varchar(1000) NOT NULL,
  `deliverorpickup` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `email`, `password`, `password_salt`, `created`, `attempt`, `phone`, `street`, `city`, `state`, `zip`, `options`, `deliverorpickup`) VALUES
(1, 'Matthew', 'Clark', 'bass1player@gmail.com', '$2y$10$O8TWMDB.6CZwEua7P0t55e4EEeoORIoaBVzdPV2G/xrCjDc3MMqiS', '', '2017-01-19 18:39:47', '0', '9999999999', '24660 apple street', 'santa clarita', 'ca', '91321', '', 'deliver');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `burgersaddons`
--
ALTER TABLE `burgersaddons`
  ADD PRIMARY KEY (`BAOID`);

--
-- Indexes for table `burgerstoppings`
--
ALTER TABLE `burgerstoppings`
  ADD PRIMARY KEY (`BTID`);

--
-- Indexes for table `contactinfo`
--
ALTER TABLE `contactinfo`
  ADD PRIMARY KEY (`ContactID`);

--
-- Indexes for table `itemoptions`
--
ALTER TABLE `itemoptions`
  ADD PRIMARY KEY (`OptionID`),
  ADD KEY `OptionName` (`OptionName`),
  ADD KEY `OptionName_2` (`OptionName`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`ItemID`),
  ADD KEY `ItemTypeID` (`ItemTypeID`),
  ADD KEY `OptionName` (`OptionName`),
  ADD KEY `OptionName_2` (`OptionName`);

--
-- Indexes for table `menutype`
--
ALTER TABLE `menutype`
  ADD PRIMARY KEY (`MenuTypeID`),
  ADD KEY `ItemTypeID` (`ItemTypeID`);

--
-- Indexes for table `sandwichaddons`
--
ALTER TABLE `sandwichaddons`
  ADD PRIMARY KEY (`SAID`);

--
-- Indexes for table `sandwichtoppings`
--
ALTER TABLE `sandwichtoppings`
  ADD PRIMARY KEY (`STID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `burgersaddons`
--
ALTER TABLE `burgersaddons`
  MODIFY `BAOID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `burgerstoppings`
--
ALTER TABLE `burgerstoppings`
  MODIFY `BTID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `contactinfo`
--
ALTER TABLE `contactinfo`
  MODIFY `ContactID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `itemoptions`
--
ALTER TABLE `itemoptions`
  MODIFY `OptionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `ItemID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `menutype`
--
ALTER TABLE `menutype`
  MODIFY `MenuTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `sandwichaddons`
--
ALTER TABLE `sandwichaddons`
  MODIFY `SAID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `sandwichtoppings`
--
ALTER TABLE `sandwichtoppings`
  MODIFY `STID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `ItemTypeID_FK` FOREIGN KEY (`ItemTypeID`) REFERENCES `menutype` (`ItemTypeID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
