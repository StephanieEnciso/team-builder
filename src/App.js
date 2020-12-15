import './App.css';
import React, { useState } from 'react';
import TeamMemForm from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {
  const [ teamMemList, setTeamMemList] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <div className="App">
      <TeamMemForm values = {formValues}/>
    </div>
  );
}

export default App;
