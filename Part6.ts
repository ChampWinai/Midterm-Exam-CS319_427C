async function fetchStudentData(): Promise<{ name: string; grades: number[] }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve({ name: "John", grades: [80, 90, 85] });
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000);
    });
  }
  
  (async function () {
    try {
      const data = await fetchStudentData();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  })();
  