-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 01:51 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `poliklinikdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentID` smallint(6) NOT NULL,
  `UserID` smallint(6) NOT NULL,
  `DoctorID` smallint(6) NOT NULL,
  `DepartmentID` smallint(6) NOT NULL,
  `HospitalId` smallint(6) NOT NULL,
  `AppointmentDate` date NOT NULL,
  `AppointmentTime` time NOT NULL,
  `Status` enum('Aktif','İptal Edildi','Geçmiş') DEFAULT 'Aktif',
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`AppointmentID`, `UserID`, `DoctorID`, `DepartmentID`, `HospitalId`, `AppointmentDate`, `AppointmentTime`, `Status`, `CreatedAt`) VALUES
(1, 6, 1, 1, 1, '2024-01-15', '10:00:00', 'Aktif', '2024-12-31 13:44:23'),
(2, 6, 3, 2, 1, '2024-01-15', '11:30:00', 'Geçmiş', '2024-12-31 13:44:23'),
(3, 6, 2, 1, 2, '2024-01-16', '09:15:00', 'İptal Edildi', '2024-12-31 13:44:23'),
(4, 10, 4, 3, 2, '2024-01-17', '14:00:00', 'İptal Edildi', '2024-12-31 13:44:23'),
(5, 10, 4, 4, 4, '2025-01-29', '10:20:00', 'İptal Edildi', '2025-01-25 16:09:31'),
(6, 10, 4, 4, 4, '2025-01-26', '10:20:00', 'İptal Edildi', '2025-01-25 16:11:37'),
(7, 10, 2, 2, 2, '2025-02-02', '08:30:00', 'İptal Edildi', '2025-01-25 16:16:30'),
(8, 10, 1, 1, 1, '2025-02-03', '09:50:00', 'İptal Edildi', '2025-01-25 16:19:51'),
(9, 5, 3, 3, 3, '2025-02-01', '09:40:00', 'Aktif', '2025-01-25 16:22:07'),
(10, 5, 3, 3, 3, '2025-01-26', '09:30:00', 'Aktif', '2025-01-25 16:26:49'),
(11, 10, 2, 2, 2, '2025-03-14', '09:30:00', 'İptal Edildi', '2025-03-07 08:19:46'),
(12, 10, 1, 1, 1, '2025-04-22', '08:10:00', 'İptal Edildi', '2025-04-20 12:54:03'),
(13, 10, 2, 2, 2, '2025-04-22', '10:10:00', 'İptal Edildi', '2025-04-20 12:59:06'),
(14, 14, 2, 2, 2, '2025-05-19', '09:50:00', 'İptal Edildi', '2025-05-13 07:42:44');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `DepartmentID` smallint(6) NOT NULL,
  `DepartmentName` varchar(100) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`DepartmentID`, `DepartmentName`, `CreatedAt`) VALUES
(1, 'Kardiyoloji', '2024-12-26 20:04:19'),
(2, 'Dahiliye', '2024-12-26 20:04:19'),
(3, 'Cerrahi', '2024-12-26 20:04:19'),
(4, 'Pediatri', '2024-12-26 20:04:19'),
(6, 'Ağız ve Diş Sağlığı ', '2025-05-12 07:15:48');

-- --------------------------------------------------------

--
-- Table structure for table `doctors`
--

CREATE TABLE `doctors` (
  `DoctorID` smallint(6) NOT NULL,
  `FullName` varchar(100) NOT NULL,
  `DepartmentID` smallint(6) NOT NULL,
  `HospitalId` smallint(6) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `doctors`
--

INSERT INTO `doctors` (`DoctorID`, `FullName`, `DepartmentID`, `HospitalId`, `CreatedAt`) VALUES
(1, 'Dr. Ali Veli', 1, 1, '2024-12-26 20:04:38'),
(2, 'Dr. Zeynep Yıldız', 2, 2, '2024-12-26 20:04:38'),
(3, 'Dr. Canan Aydın', 3, 3, '2024-12-26 20:04:38'),
(4, 'Dr. Emre Polat', 4, 4, '2024-12-26 20:04:38'),
(5, 'Dr. ali akın', 6, 5, '2025-05-12 07:45:35');

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `hospitalId` smallint(6) NOT NULL,
  `hospitalName` varchar(255) NOT NULL,
  `county` varchar(255) NOT NULL,
  `district` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`hospitalId`, `hospitalName`, `county`, `district`, `createdAt`, `updatedAt`) VALUES
(1, 'Özel Hastane A', 'İstanbul', 'Kadıköy', '2024-12-26 20:04:29', '2024-12-26 20:04:29'),
(2, 'Devlet Hastanesi B', 'Ankara', 'Çankaya', '2024-12-26 20:04:29', '2024-12-26 20:04:29'),
(3, 'Özel Hastane C', 'İzmir', 'Konak', '2024-12-26 20:04:29', '2024-12-26 20:04:29'),
(4, 'Hastane D', 'Bursa', 'Osmangazi', '2024-12-26 20:04:29', '2024-12-26 20:04:29'),
(5, 'devlet hastanesi', 'karaman', 'merkez', '2025-05-12 07:39:51', '2025-05-12 07:39:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` smallint(6) NOT NULL,
  `FullName` varchar(70) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `Role` enum('patient','doctor','admin') DEFAULT 'patient',
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `FullName`, `Email`, `PasswordHash`, `Role`, `CreatedAt`) VALUES
(5, 'uğur uğur', 'admintest@test.com', '$2b$10$cf9dICxem3M9SuVwM3vJ7OA/uXChqZQCaSbVjWXrn0xyM2cOqHCSG', 'patient', '2024-12-27 13:13:46'),
(6, 'ahmet aslan', 'dneme6@gmail.com', '$2b$10$7lyDcCEBQbhXwyi0zyGdcOJa7NgKfULjy5TjsxsMdVrZzPVDikPpy', 'patient', '2024-12-27 14:00:15'),
(7, 'uğur uğur2', 'admintest1@test.com', '$2b$10$5qJhHG9eENOyat1IwaLVWudatkX23jNgkOCAhAca9L8SmLl5IFkdu', 'patient', '2024-12-27 17:38:24'),
(8, 'uğur uğur3', 'admintest2@test.com', '$2b$10$067hckkqP3r3eTYj2MMxOu894A2gUFiOCSXqIB2upNfpGZl5IXo/m', 'patient', '2024-12-27 17:42:52'),
(10, 'uğur uğur3', 'admintest3@test.com', '$2b$10$b0ieu5LBnUagJk1YWNQdvO7iApH2WAlrvFgL4RD/h.JNyK4AWarAC', 'patient', '2024-12-27 17:51:01'),
(11, 'aslı güneş ', 'admintest4@test.com', '$2b$10$cF6P71uJ70Hj7vKnan.qiuP9iuufivGl3Dk6Kb/uNqzoWNfAOyjVG', 'patient', '2025-02-14 13:02:57'),
(13, 'admin', 'admin@example.com', '$2b$10$qgPiRqZLrExpLfcWYVfHvePSChDRnX4ypvVpwXg.lmi93Lx9Jc/Va', 'admin', '2025-05-11 08:25:24'),
(14, 'adil', 'deneme5@example.com', '$2b$10$xAwh52TDm8dGRvm7SsP0fO0IUpZTmO.m1aX0tQ95gNJK8MUA9qelC', 'patient', '2025-05-13 07:24:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`AppointmentID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `HospitalId` (`HospitalId`),
  ADD KEY `DoctorID` (`DoctorID`),
  ADD KEY `DepartmentID` (`DepartmentID`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DepartmentID`);

--
-- Indexes for table `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`DoctorID`),
  ADD KEY `HospitalId` (`HospitalId`),
  ADD KEY `DepartmentID` (`DepartmentID`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`hospitalId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `AppointmentID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `DepartmentID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `doctors`
--
ALTER TABLE `doctors`
  MODIFY `DoctorID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `hospitalId` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`),
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`HospitalId`) REFERENCES `hospitals` (`hospitalId`),
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`DoctorID`) REFERENCES `doctors` (`DoctorID`),
  ADD CONSTRAINT `appointments_ibfk_4` FOREIGN KEY (`DepartmentID`) REFERENCES `departments` (`DepartmentID`);

--
-- Constraints for table `doctors`
--
ALTER TABLE `doctors`
  ADD CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`HospitalId`) REFERENCES `hospitals` (`hospitalId`),
  ADD CONSTRAINT `doctors_ibfk_2` FOREIGN KEY (`DepartmentID`) REFERENCES `departments` (`DepartmentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
