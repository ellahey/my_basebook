const dept_path = 'http://localhost:5000/departments'



export async function getDepartments() {
    try {
      const response = await fetch(dept_path); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
     // const data = await response.data;
      console.log(`Here is the data ${response}`)
      //const departmentsArray = data.values();
      const departmentsArray = response.json()
      return departmentsArray;
    } catch (error) {
      console.error('Error fetching departments:', error.message);
      return []; 
    }
  }