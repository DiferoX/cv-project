import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';


function App ()
{
  const userData = 
  [
    {
      id: uuidv4(),
      firstName: 'COSME',
      lastName: 'FULANITO',
      address: 'Evergreen Terrace 742, Springfield',
      photo: '',
      title: 'Nuclear Safety Inspector',
      skills: []
    },
    {
      id: uuidv4(),
      firstName: 'PETER',
      lastName: 'PARKER',
      address: '',
      photo: '',
      phoneNumber: '',
      email: '',
      linkedIn: '',
      github: '',
      skills: []
    }
  ]

  const [users, setUsers] = useState(userData);

  // Add CV
  const addCV = (user) =>
  {
    user.id = uuidv4()
    if (!user.skills)
      user.skills = [];
    
    setUsers([...users, user])
  }

  // Delete CV
  const deleteCV = (id) =>
  {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Main 
        users={users} 
        addCV={addCV} 
        deleteCV={deleteCV} 
      />
    </div>
  );
}

export default App;
