-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 02:59 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `author` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `fileurl` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `title`, `author`, `price`, `description`, `category_id`, `fileurl`) VALUES
(67, 'The Party House ', 'Lin Anderson', 20, 'Devastated by a recent pandemic brought in by outsiders, the villagers of Blackrig in the Scottish Highlands are outraged when they find that the nearby estate plans to reopen its luxury ‘party house’ to tourists. As animosity sparks amongst the locals, part of the property is damaged and, in the ensuing chaos, the remains of a young girl are found in the wreck.', 4, 'http://localhost:3000/image/image-1720917388948.jpg'),
(69, 'Daisy Darker', ' Alice Feeney', 40.44, 'It\'s Halloween, and Daisy Darker has just arrived at her grandmother’s house to celebrate her eightieth birthday. The house, Seaglass, sits perched on a rugged private island whose granite rocks are isolated form the rest of the world whenever the tide comes in. The Darker family haven\'t been reunited for over a decade, and this time, by the time the tide goes out, one of them will be dead.', 4, 'http://localhost:3000/image/image-1720917433010.jpg'),
(70, 'The Maltese Falcon', 'Dashiell Hammett', 30.2, 'Sam Spade takes a job for Miss Wonderley to find her sister, who has eloped, but finds himself embroiled in a hunt for the jewel-encrusted Maltese Falcon. Both hunter and hunted, Spade must track down this treasure that is worth killing for before the Fat Man finds him.', 3, 'http://localhost:3000/image/image-1720917472284.jpg'),
(71, 'The Girl with the Dragon Tattoo', 'Stieg Larsson', 20.99, 'Larsson’s first novel, The Girl with the Dragon Tattoo, has everything a mystery requires. Murder, family ties, love in the air, and financial shenanigans. What happened to Harriet Vanger who disappeared forty years ago? Mikael Blomkvist, a disgraced journalist, and Lisbeth Salander, a tattooed and pierced hacker genius, are on the complex case. They uncover family iniquity and corruption at the top of Sweden’s industrial ladder.', 3, 'http://localhost:3000/image/image-1720917514264.jpg'),
(72, 'Frankenstein', 'Mary Shelley ', 33.33, 'Mary Shelley started writing classic gothic thriller Frankenstein when she was 18 years old. Two centuries later, it is a major ancestor of both the science fiction and horror genres, tackling huge themes like the nature of life and death, immortality and genetic engineering. ', 2, 'http://localhost:3000/image/image-1720917550638._AC_UF1000,1000_QL80_'),
(73, 'Foundation', ', by Isaac Asimov', 69, 'Asimov was a prolific writer, but many of his best works are classic short stories such as Nightfall, or The Last Question, which play out like long jokes with a punchline twist at the end. In the Foundation series, he’s in another mode entirely, charting the rise and fall of empires in sweeping brush strokes. Asimov’s prose can be stilted, and betrays the attitudes of its time in the portrayal of female characters, but it has left a lasting legacy.', 2, 'http://localhost:3000/image/image-1720917591721.jpg'),
(74, 'The Kiss Quotient', 'The Kiss Quotient by Helen Hoang', 54, 'More nerdy storylines, please! In this novel from Helen Hoang, Stella Lane is the genius mathematician who puts herself in remedial romance — by hiring escort Michael Phan to teach her the ins and outs of sex. We consider it the perfect equation for a great read', 5, 'http://localhost:3000/image/image-1720917624193._AC_UF1000,1000_QL80_'),
(75, 'CAIN’S JAWBONE', 'TORQUEMADA ', 77, 'Cain’s Jawbone is notable in that it’s considered to be the most difficult-to-solve mystery ever written. To date, only four people have solved this nearly 100-year-old literary puzzle. If you try it for yourself, prepare yourself to attempt rearranging the out-of-order pages — which can be organized in a variety of ways, but only one is correct.', 3, 'http://localhost:3000/image/image-1720917664043.png'),
(76, 'The Woman in Cabin 10', 'Ruth Ware', 23, 'Lo Blacklock, a journalist who writes for a travel magazine, has just been given the assignment of a lifetime: a week on a luxury cruise with only a handful of cabins. The sky is clear, the waters calm, and the veneered, select guests jovial as the exclusive cruise ship, the Aurora, begins her voyage in the picturesque North Sea. At first, Lo\'s stay is nothing but pleasant: the cabins are plush, the dinner parties are sparkling, and the guests are elegant. But as the week wears on, frigid winds whip the deck, gray skies fall, and Lo witnesses what she can only describe as a dark and terrifying nightmare: a woman being thrown overboard. ', 4, 'http://localhost:3000/image/image-1720917741507.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`) VALUES
(1, 'fantasy'),
(2, 'sci-fi'),
(3, 'mystery'),
(4, 'thriller'),
(5, 'romance');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
