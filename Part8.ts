function parseJSONData(jsonData: string): any {
    try {
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Error parsing JSON data:", error.message);
      return "Invalid JSON data";
    }
  }
  
  // ตัวอย่างการใช้งาน:
  const validJSON = '{"name": "John", "age": 16}';
  const invalidJSON = '{"name": "John", "age": 16'; // ไม่มีวงเล็บปิด
  
  console.log(parseJSONData(validJSON)); // คืนค่าข้อมูลที่แยกวิเคราะห์ได้
  console.log(parseJSONData(invalidJSON)); // แสดงข้อความข้อผิดพลาด
  