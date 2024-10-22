class Student {
    name: string;
    age: number;
    grades: number[] = [];
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    addGrade(grade: number): void {
      this.grades.push(grade);
    }
  
    getAverageGrade(): number {
      const total = this.grades.reduce((acc, grade) => acc + grade, 0);
      return this.grades.length > 0 ? total / this.grades.length : 0;
    }
  
    static totalStudents: number = 0;
  
    static addStudent(): void {
      Student.totalStudents++;
    }
  }
  Student.addStudent = function (): number {
    return Student.totalStudents;
  };
    