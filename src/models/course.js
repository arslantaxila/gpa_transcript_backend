const { pool } = require('../utils/database');

const createCourse = (userId, courseName, courseCode, creditHours, marks, semester) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO courses (user_id, course_name, course_code, credit_hours, marks, semester) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, courseName, courseCode, creditHours, marks, semester],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId);
      }
    );
  });
};

const getCoursesByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM courses WHERE user_id = ?',
      [userId],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

module.exports = { createCourse, getCoursesByUserId };