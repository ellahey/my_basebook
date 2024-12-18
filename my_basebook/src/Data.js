//Data.js

const dept_path = 'http://localhost:5000/departments'
const people_path = 'http://localhost:5000/people'



export async function getDepartments() {
    try {
      const response = await fetch(dept_path); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(`Here is the data ${response}`)
      const departmentsArray = response.json()
      console.log(`Here is the depts array ${departmentsArray}`);
      return departmentsArray;
    } catch (error) {
      console.error('Error fetching departments:', error.message);
      return []; 
    }
  }

  
export async function getPeople() {
    try {
      const response = await fetch(people_path); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(`Here is the data ${response}`)
      const peopleArray = response.json()
      console.log(peopleArray)
      return peopleArray;
    } catch (error) {
      console.error('Error fetching departments:', error.message);
      return []; 
    }
  }

  export async function getEmployeesByDepartment(departmentId) {
    const response = await fetch(`http://localhost:5000/people?departmentId=${departmentId}`);
    const data = await response.json();
    return data;
  }


  