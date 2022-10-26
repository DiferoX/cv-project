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
      photo: 'CosmeFulanito.jfif',
      title: 'Nuclear Safety Inspector',
      skills: [
        { id: uuidv4(), text: 'Chief of Police' },
        { id: uuidv4(), text: 'Bartender' },
        { id: uuidv4(), text: 'Astronaut' },
        { id: uuidv4(), text: 'Mr. Plow' },
        { id: uuidv4(), text: 'Puchy' },
        
      ],
      education: [
        {
          id: uuidv4(),
          school: 'Springfield High School',
          city: 'Springfield, USA',
          degree: 'HS Diploma College Prep',
          startDate: '1980',
          endDate: '1992',
        }
      ],
      experience: [
        {
          id: uuidv4(),
          company: 'Springfield Nuclear Power Plant',
          city: 'Springfield, USA',
          position: 'Safety Inspector',
          startDate: '1989',
          endDate: 'Present',
        }
      ],
    },
    {
      id: uuidv4(),
      firstName: 'DIEGO',
      lastName: 'RUIZ',
      address: '',
      photo: 'StanEmo.jpg',
      phoneNumber: '',
      email: 'diferox@gmail.com',
      linkedIn: '',
      github: 'github.com/DiferoX',
      skills: [
        { id: uuidv4(), text: 'Javascript' },
        { id: uuidv4(), text: 'Node.js' },
        { id: uuidv4(), text: 'React' },
        { id: uuidv4(), text: 'HTML' },
        { id: uuidv4(), text: 'CSS' },
      ],
      education: [
        {
          id: uuidv4(),
          school: 'The Odin Project',
          city: 'Medellin, CO',
          degree: 'Web Developer',
          startDate: '05/2022',
          endDate: '11/2022',
        },
        {
          id: uuidv4(),
          school: 'Cool University',
          city: 'Medellin, CO',
          degree: 'Software Developer',
          startDate: '01/2010',
          endDate: '01/2015',
        }
      ],
      experience: [
        {
          id: uuidv4(),
          company: 'Super Cool Web Company',
          city: 'Medellin, Co',
          position: 'Senior Web Developer',
          startDate: '01/2020',
          endDate: 'Present',
        },
        {
          id: uuidv4(),
          company: 'Another Web Company',
          city: 'Medellin, CO',
          position: 'Junior Web Developer',
          startDate: '11/2015',
          endDate: '01/2020',
        }
      ],
    }
  ]

  const [users, setUsers] = useState(userData);

  // Add CV
  const addCV = (user) =>
  {
    // if (user.id === undefined)
      user.id = uuidv4()

    if (!user.skills)
      user.skills = [];
    if (!user.education)
      user.education = [];
    if (!user.experience)
      user.experience = [];
    
    setUsers([...users, user])
    
    // console.log(user);
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
