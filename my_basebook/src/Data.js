

const dept_path = 'http://localhost:3000/departments'
const people_path = 'http://localhost:3000/people'


export async function getDepartments() {
  try {
    const response = await fetch(dept_path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


  
export async function getPeople() {
    try {
      const response = await fetch(people_path); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  