const students: Student[] = [
    new Student("John", 16),
    new Student("Jane", 17),
    new Student("Mark", 18),
  ];
  
  // เพิ่มเกรดตัวอย่าง
  students[0].grades = [70, 80];
  students[1].grades = [85, 95];
  students[2].grades = [60, 65];
  
  // 1. filter(): นักเรียนที่มีเกรดเฉลี่ยมากกว่า 75
  const above75 = students.filter(student => student.getAverageGrade() > 75);
  
  // 2. map(): สร้างอาร์เรย์ที่มีเฉพาะชื่อของนักเรียน
  const studentNames = students.map(student => student.name);
  
  // 3. reduce(): คำนวณจำนวนเกรดทั้งหมดที่นักเรียนทุกคนได้รับ
  const totalGrades = students.reduce((total, student) => total + student.grades.length, 0);
  
  console.log(above75, studentNames, totalGrades);
  