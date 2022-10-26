import React, { useState } from 'react';
import '../../../styles/CVForm/Education/FormEducation.css';
import { FaUniversity, FaCity, FaUserGraduate, FaCalendarCheck } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


function FormEducation (props)
{
  const [data, setData] = useState([]);

  const onChange = (e) =>
  {
    setData({ ...data, [e.target.name] : e.target.value })
  };

  const cleanInput = () =>
  {
    let inputs = document.querySelectorAll('.educationForm input');
    inputs.forEach (input => (input.value = ''));
  }

  const onSend = (e) =>
  {
    e.preventDefault();
    const newEducation = 
    {
      id: uuidv4(),
      school: data.school,
      city: data.city,
      degree: data.degree,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    props.addEducation(newEducation);
    cleanInput();
  };
  
  return (
    <div className='educationForm'>
      <div>
        <div>
          <FaUniversity className='educationIcon' />
          <input
            type='text' 
            name='school' 
            id='school' 
            placeholder='School' 
            onChange={onChange}
          />
        </div>
        <div>
          <FaCity className='educationIcon' />
          <input
            type='text' 
            name='city' 
            id='city' 
            placeholder='City' 
            onChange={onChange}
          />
        </div>
        <div>
          <FaUserGraduate className='educationIcon' />
          <input
            type='text' 
            name='degree' 
            id='degree' 
            placeholder='Degree' 
            onChange={onChange}
          />
        </div>
        <div>
          <div>
            <FaCalendarCheck className='educationIcon' />
            <input
              type='date' 
              name='startDate' 
              id='startDate' 
              placeholder='Start Date' 
              onChange={onChange}
            />
          </div>
          <div>
            <FaCalendarCheck className='educationIcon' />
            <input
              type='date' 
              name='endDate' 
              id='endDate' 
              placeholder='End Date' 
              onChange={onChange}
            />
          </div>
        </div>

        <button className='educationBtn' onClick={onSend}>Add</button>
      </div>
    </div>
  );
}

export default FormEducation;
