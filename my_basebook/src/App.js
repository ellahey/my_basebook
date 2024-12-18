//App.js

import React, { useEffect, useState } from 'react';
import './App.css';
import { getPeople, getDepartments } from './Data';

function App() {
  const [people, setPeople] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPeople(), getDepartments()])
      .then(([peopleData, departmentsData]) => {
        const mergedData = peopleData.map(person => {
          const department = departmentsData.find(dept => dept.id === person.departmentId);
          return {
            ...person,
            departmentTitle: department ? department.title : 'Unknown',
          };
        });
        setPeople(mergedData);
        setDepartments(departmentsData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Employees by Department</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {departments.map(dept => (
              <div key={dept.id}>
                <h3>{dept.title}</h3>
                <ul>
                  {people.map(person => (
                        <li key={person.id}>
                          <p>{person.firstName} {person.infix} {person.lastName} - "{person.quote}"</p>
                        </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
