class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Teacher extends Person {
    subject: string;
    students: Student[] = [];
  
    constructor(name: string, age: number, subject: string) {
      super(name, age);
      this.subject = subject;
    }
  
    assignGrades(student: Student, grade: number): void {
      student.addGrade(grade);
    }
  }
  