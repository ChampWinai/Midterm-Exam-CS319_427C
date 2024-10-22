function createBonusAdder(bonus: number) {
    return function (grade: number): number {
      return grade + bonus;
    };
  }
  
  const addBonus = createBonusAdder(5);
  
  // ตัวอย่างการใช้งาน:
  let student = new Student("John", 16);
  student.addGrade(70);
  student.addGrade(80);
  
  student.grades = student.grades.map(addBonus);
  console.log(student.grades); // [75, 85]
  