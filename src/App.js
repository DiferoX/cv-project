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
      address: 'Dg 93a # 30-20 Medellín, CO',
      photo: 'DFR.png',
      title: 'Frontend Web Developer',
      phoneNumber: '+57 (321) 774 8979',
      email: 'diferox@gmail.com',
      linkedIn: 'linkedin.com/in/diferox',
      github: 'github.com/DiferoX',
      url: 'diferox.github.io/portfolio',
      about:'I am a Front-End Web Developer. I love to take on new projects that challenge my technological and analytics capacities. I am passionate about the creation of aplications and interactives website experiences, by using tools like Javascript, React, HTML, CSS, Git, GitHub, among others.',
      skills: [
        { id: uuidv4(), text: 'Javascript' },
        { id: uuidv4(), text: 'React' },
        { id: uuidv4(), text: 'HTML' },
        { id: uuidv4(), text: 'CSS' },
        { id: uuidv4(), text: 'Git' },
        { id: uuidv4(), text: 'GitHub' },
        { id: uuidv4(), text: 'Node.js (in Progress)' },
      ],
      education: [
        {
          id: uuidv4(),
          school: 'The Odin Project',
          city: 'Medellín, CO',
          degree: 'Web Developer',
          startDate: '05/2022',
          endDate: 'Present',
        },
        {
          id: uuidv4(),
          school: 'Tecnológico de Comfenalco',
          city: 'Cartagena, CO',
          degree: 'System Technologist',
          startDate: '06/2000',
          endDate: '01/2004',
        }
      ],
      experience: [
        {
          id: uuidv4(),
          company: 'Clínica Oftalmológica Alfavisión',
          city: 'Medellín, CO',
          position: 'System Chief',
          startDate: '01/2005',
          endDate: '12/2015',
        },
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
