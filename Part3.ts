interface Admin {
    name: string;
    department: string;
  }
  
  function getAdminInfo(admin: Admin): void {
    console.log(`Admin Name: ${admin.name}, Department: ${admin.department}`);
  }
  