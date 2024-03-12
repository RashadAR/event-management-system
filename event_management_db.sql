-- Create a database
CREATE DATABASE IF NOT EXISTS event_management_db;
USE event_management_db;

-- Table for users (User Authentication)
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Table for events
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  venue_id INT,
  organizer_id INT,
  FOREIGN KEY (venue_id) REFERENCES venues(id) ON DELETE SET NULL,
  FOREIGN KEY (organizer_id) REFERENCES organizers(id) ON DELETE SET NULL
);

-- Table for participants (combined with user auth)
CREATE TABLE IF NOT EXISTS participants (
  user_id INT PRIMARY KEY,
  event_id INT,
  name VARCHAR(255), -- Add this line for the 'name' column
  email VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Table for venues
CREATE TABLE IF NOT EXISTS venues (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL
);

-- Table for schedules
CREATE TABLE IF NOT EXISTS schedules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  day_of_week VARCHAR(10) NOT NULL,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- Table for organizers
CREATE TABLE IF NOT EXISTS organizers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Table for tickets (combined with payments)
CREATE TABLE IF NOT EXISTS tickets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT,
  user_id INT,
  price DECIMAL(10, 2) NOT NULL,
  payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
  payment_date TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



-- Sample Data for Users
INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', 'hashed_password_1'),
('jane_smith', 'jane@example.com', 'hashed_password_2'),
('bob_jackson', 'bob@example.com', 'hashed_password_3');

-- Sample Data for Events
INSERT INTO events (name, date, venue_id, organizer_id) VALUES
('Event 1', '2024-03-10', 1, 1),
('Event 2', '2024-03-15', 2, 2),
('Event 3', '2024-03-20', 3, 3);

-- Sample Data for Participants
INSERT INTO participants (user_id, event_id) VALUES
(1, 1),
(2, 1),
(3, 2);

-- Sample Data for Venues
INSERT INTO venues (name, location) VALUES
('Venue A', 'Location A'),
('Venue B', 'Location B'),
('Venue C', 'Location C');

-- Sample Data for Schedules
INSERT INTO schedules (event_id, start_time, end_time, day_of_week) VALUES
(1, '12:00:00', '15:00:00', 'Monday'),
(2, '14:00:00', '17:00:00', 'Wednesday'),
(3, '10:00:00', '13:00:00', 'Friday');

-- Sample Data for Organizers
INSERT INTO organizers (name, email) VALUES
('Organizer 1', 'organizer1@example.com'),
('Organizer 2', 'organizer2@example.com'),
('Organizer 3', 'organizer3@example.com');

-- Sample Data for Tickets
INSERT INTO tickets (event_id, user_id, price, payment_status, payment_date) VALUES
(1, 1, 20.00, 'completed', '2024-03-08 09:30:00'),
(2, 2, 25.00, 'completed', '2024-03-12 11:45:00'),
(3, 3, 30.00, 'pending', NULL);
