import React, { useEffect, useState } from 'react';
import './App.css';
import { getPeople, getDepartments } from './Data';
import { TeamCard } from  './components/Teamcard';
import { getImage } from './components/Image';

function App() {
  const [people, setPeople] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [departmentsData, peopleData] = await Promise.all([
          getDepartments(),
          getPeople(),
        ]);

      // Dept. map
        const departmentMap = Object.fromEntries(
          departmentsData.map(dept => [dept.id, dept.title])
        );

        const peopleWithDepartments = peopleData.map(person => {
          const department = departmentMap[person.departmentId] || "Unknown Department";
          const image = getImage(person);
          return { ...person, department, image };
        });
        setDepartments(departmentsData);
        setPeople(peopleWithDepartments);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Group by dept.
  const peopleGroupedByDepartment = departments.map(dept => ({
    ...dept,
    employees: people.filter(person => person.department === dept.title),
  }));

  return (
    <div className="App">
      <header className="App-header">
        <h2>Meet The Team</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {peopleGroupedByDepartment.map(dept => (
              <div key={dept.id}>
                <h3>{dept.title}</h3>
                {dept.employees.length > 0 ? (
                  <ul>
                    {dept.employees.map(person => {
                  
                      return (
                        <li key={person.id}>
                          <div className="-mx-4 flex flex-wrap justify-center">
                          <TeamCard person={person} 
                            name={`${person.firstName} ${person.infix || ''} ${person.lastName}`}
                            quote={person.quote || ''}
                            imageSrc={person.image} crossorigin="anonymous" 
                            
                          />
                          </div>
                          <p>
                            {person.firstName} {person.infix || ''} {person.lastName} - "{person.quote || ''}"
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No employees in this department.</p>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
