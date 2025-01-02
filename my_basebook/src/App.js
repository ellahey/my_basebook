import React, { useEffect, useState } from "react";
import "./App.css";
import { getPeople, getDepartments } from "./Data";
import TeamCard from "./components/Teamcard";

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

        // Dept. key-value map
        const departmentMap = Object.fromEntries(
          departmentsData.map((dept) => [dept.id, dept.title])
        );

        // People-dept mapping
        const peopleWithDepartments = peopleData.map((person) => {
          const department =
            departmentMap[person.departmentId] || "Unknown Department";
          return { ...person, department };
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
  const peopleGroupedByDepartment = departments.map((dept) => ({
    ...dept,
    employees: people.filter((person) => person.department === dept.title),
  }));

  return (
    <div className="App">
      <header className="App-header">
        <h2>Meet The Team</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {peopleGroupedByDepartment.map((dept) => (
              <div key={dept.id}>
                <h3>{dept.title}</h3>
                {dept.employees.length > 0 ? (
                  <ul>
                    {dept.employees.map((person) => {
                      return (
                        <li key={person.id}>
                          <div className="Card">
                            <TeamCard
                              name={`${person.firstName} ${person.infix || ""} ${person.lastName}`}
                              quote={person.quote || ""}
                              src={person.image}
                            />
                            
                          </div>
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
