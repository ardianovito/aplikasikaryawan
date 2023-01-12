-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 11:59 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL,
  `nik` bigint(16) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `dateofbirth` date DEFAULT NULL,
  `age` int(2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nik`, `name`, `gender`, `address`, `country`, `dateofbirth`, `age`, `createdAt`, `updatedAt`) VALUES
(84, 3370056987450001, 'Lionel Messi', 'Laki-Laki', 'Jl. Achmad Yani no 89 Jakarta Pusat', 'Argentina', '1987-01-01', 35, '2023-01-12 22:29:26', '2023-01-12 22:39:18'),
(86, 3370056987450002, 'Cristiano Ronaldo', 'Laki-Laki', 'Jl. Achmad Yani no 78 Jakarta Pusat', 'Portugal', '1983-05-02', 37, '2023-01-12 22:31:22', '2023-01-12 22:31:22'),
(97, 3370056987450004, 'Bambang Pamungkas', 'Laki-Laki', 'Jl. Achmad Yani no 67 Jakarta Pusat', 'Portugal', '1984-01-03', 40, '2023-01-12 22:35:49', '2023-01-12 22:35:49'),
(99, 3370056987450006, 'Natasha Romanov', 'Laki-Laki', 'Jl. Achmad Yani no 56Jakarta Pusat', 'Rusia', '1989-07-04', 33, '2023-01-12 22:37:19', '2023-01-12 22:37:19'),
(100, 3370056987450007, 'Entis Siti Jubaidah', 'Laki-Laki', 'Jl. Achmad Yani no 45 Jakarta Pusat', 'Malaysia', '1992-01-05', 30, '2023-01-12 22:40:06', '2023-01-12 22:40:06'),
(103, 3370056987450009, 'Guldan', 'Laki-Laki', 'Jalan Draenor', 'Indonesia', '1990-12-08', 33, '2023-01-12 22:45:55', '2023-01-12 22:45:55'),
(104, 3370056987450003, 'Gamora', 'Laki-Laki', 'Markas Avenger', 'Rusia', '2000-12-12', 23, '2023-01-12 22:51:16', '2023-01-12 22:51:16'),
(105, 3370056987450201, 'Ardiano Vito', 'Laki-Laki', 'Jalanin aja dulu siapa tau jodoh', 'Malaysia', '1992-02-02', 31, '2023-01-12 22:58:59', '2023-01-12 22:58:59');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nik` (`nik`),
  ADD UNIQUE KEY `nik_2` (`nik`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
