const { pool } = require('../utils/database');

const createTranscript = (userId, studentName, studentId, program, contactInfo) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO transcripts (user_id, student_name, student_id, program, contact_info) VALUES (?, ?, ?, ?, ?)',
      [userId, studentName, studentId, program, contactInfo],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results.insertId);
      }
    );
  });
};

const getTranscripts = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM transcripts', (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

const updateTranscriptStatus = (id, status) => {
  return new Promise((resolve, reject) => {
    pool.query(
      'UPDATE transcripts SET status = ? WHERE id = ?',
      [status, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      }
    );
  });
};

const deleteTranscript = (id) => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM transcripts WHERE id = ?', [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

module.exports = { createTranscript, getTranscripts, updateTranscriptStatus, deleteTranscript };