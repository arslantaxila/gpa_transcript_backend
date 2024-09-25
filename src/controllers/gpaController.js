const { createCourse, getCoursesByUserId } = require('../models/course');

const calculateGPA = async (req, res) => {
  const { courses } = req.body;
  const userId = req.user.id;

  try {
    for (const course of courses) {
      await createCourse(userId, course.courseName, course.courseCode, course.creditHours, course.marks, course.semester);
    }

    const userCourses = await getCoursesByUserId(userId);
    const gpa = calculateGPAFromCourses(userCourses);
    res.json({ gpa });
  } catch (error) {
    res.status(500).json({ message: 'Error calculating GPA', error });
  }
};

const calculateGPAFromCourses = (courses) => {
  let totalPoints = 0;
  let totalCredits = 0;

  for (const course of courses) {
    const gradePoint = getGradePoint(course.marks);
    totalPoints += gradePoint * course.creditHours;
    totalCredits += course.creditHours;
  }

  return totalPoints / totalCredits;
};

const getGradePoint = (marks) => {
  if (marks >= 85) return 4.0;
  if (marks >= 80) return 3.7;
  if (marks >= 75) return 3.3;
  if (marks >= 71) return 3.0;
  if (marks >= 68) return 2.7;
  if (marks >= 64) return 2.3;
  if (marks >= 60) return 2.0;
  if (marks >= 57) return 1.7;
  if (marks >= 53) return 1.3;
  if (marks >= 50) return 1.0;
  return 0.0;
};

module.exports = { calculateGPA };