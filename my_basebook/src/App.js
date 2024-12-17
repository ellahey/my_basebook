import React, { useEffect, useState } from 'react';
import './App.css';
import { getDepartments } from './Data.js';

function App() {
  const [depts, setDepts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    getDepartments()
      .then(data => {
        console.log('Departments fetched:', data);
        setDepts(data); 
        setLoading(false); 
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Departments</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
          {depts.map((dept) => (  
            <li key={dept.id}>{dept.title}</li> 
          ))}
        </ul>
        )}
      </header>
    </div>
  );
}

export default App;
