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
      inputFirstName: 'COSME',
      inputLastName: 'FULANITO',
      inputAddress: '',
      inputPhoto: '',
      inputPhoneNumber: '',
      inputEmail: '',
      inputLinkedIn: '',
      inputGithub: ''
    },
    {
      id: uuidv4(),
      inputFirstName: 'PETER',
      inputLastName: 'PARKER',
      inputAddress: '',
      inputPhoto: '',
      inputPhoneNumber: '',
      inputEmail: '',
      inputLinkedIn: '',
      inputGithub: ''
    }
  ]

  const [users, setUsers] = useState(userData);

  // Add CV
  const addCV = (user) =>
  {
    user.id = uuidv4()
    setUsers([...users, user])
    // console.log(user);
  }

  // Delete CV
  const deleteCV = (id) =>
  {
    setUsers(users.filter(user => user.id !== id))
    // console.log(id);
  }

  return (
    <div className="App">
      <Header />
      <Main users={users} addCV={addCV} deleteCV={deleteCV} />
    </div>
  );
}

export default App;
