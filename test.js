var student = {
  name: "Banna",
  roll: 12,
  department: "History",
};
//write your code here
student =
  student.name.toLowerCase() +
  parseInt(student.roll) +
  "." +
  student.department.toLowerCase();
student = student + "@ph.ac.bd";
console.log(student);
