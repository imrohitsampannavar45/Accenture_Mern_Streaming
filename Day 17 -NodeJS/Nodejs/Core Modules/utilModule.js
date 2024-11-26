// let util = require('util')
// let uname = "Sudha"
// let companyName = "Accenture"
// let yearOfExpInAcc = "2"

// let message = util.format("%s is working with %s  for the past %d years",uname,companyName,yearOfExpInAcc)
// console.log(message)

const util = require('util');
const courses = require('./Courses.json');

for (let i = 0; i < courses.length; i++) {
  let course = courses[i];
  let message = util.format("Course code: %d,        Course name: %s,            Course fees: %d", course.ccode, course.cname, course.cfees);
  console.log(message);
}
