CREATE DATABASE gpa_calculator;

USE gpa_calculator;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'admin') NOT NULL
);

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    course_name VARCHAR(100),
    course_code VARCHAR(50),
    credit_hours INT,
    marks INT,
    semester VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE transcripts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    student_name VARCHAR(100),
    student_id VARCHAR(50),
    program VARCHAR(100),
    contact_info VARCHAR(100),
    status ENUM('Underprocess', 'Ready to Collect') DEFAULT 'Underprocess',
    FOREIGN KEY (user_id) REFERENCES users(id)
);