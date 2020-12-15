import './App.css';
import React, { useState } from 'react';
import TeamMemForm from './Form';
import TeamMember from './TeamMember';

const emptyFormValues = {
  name: '',
  email: '',
  role: '',
};

function App() {
  const [ teamMemList, setTeamMemList] = useState([]);
  const [formValues, setFormValues] = useState(emptyFormValues);

  const updateTeamMemForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue,});
  };

  const submitTeamMemForm = () => {
    const newTeamMemList = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    };

    if (!newTeamMemList.name || !newTeamMemList.email || !newTeamMemList.role) return;

    setTeamMemList([newTeamMemList, ...teamMemList]);
    setFormValues(emptyFormValues);
  }


  return (
    <div className="App">
      <TeamMemForm values = {formValues} update = {updateTeamMemForm} submit = {submitTeamMemForm}/>

      {teamMemList.map((teamMem) => {
        return <TeamMember key = {teamMem.id} info = {teamMem} />
      })}
    </div>
  );
}

export default App;
