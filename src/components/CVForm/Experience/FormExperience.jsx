import React, { useState } from 'react';
import '../../../styles/CVForm/Experience/FormExperience.css';
import { FaCity, FaCalendarCheck } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { IoIosBusiness } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';


function FormExperience (props)
{
  const [data, setData] = useState([]);

  const onChange = (e) =>
  {
    setData({ ...data, [e.target.name] : e.target.value })
  };

  const cleanInput = () =>
  {
    let inputs = document.querySelectorAll('.experienceForm input');
    inputs.forEach (input => (input.value = ''));
  }

  const onSendExperience = (e) =>
  {
    e.preventDefault();
    const newExperience = 
    {
      id: uuidv4(),
      company: data.company,
      city: data.city,
      position: data.position,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    props.addExperience(newExperience);
    cleanInput();
  };
  
  return (
    <div className='experienceForm'>
      <div>
        <div>
          <IoIosBusiness className='experienceIcon' />
          <input
            type='text' 
            name='company' 
            id='company' 
            placeholder='Company' 
            onChange={onChange}
          />
        </div>
        <div>
          <FaCity className='experienceIcon' />
          <input
            type='text' 
            name='city' 
            id='city' 
            placeholder='City' 
            onChange={onChange}
          />
        </div>
        <div>
          <ImUserTie className='experienceIcon' />
          <input
            type='text' 
            name='position' 
            id='position' 
            placeholder='Position' 
            onChange={onChange}
          />
        </div>
        <div>
          <div>
            <FaCalendarCheck className='experienceIcon' />
            <input
              type='date' 
              name='startDate' 
              id='startDate' 
              placeholder='Start Date' 
              onChange={onChange}
            />
          </div>
          <div>
            <FaCalendarCheck className='experienceIcon' />
            <input
              type='date' 
              name='endDate' 
              id='endDate' 
              placeholder='End Date' 
              onChange={onChange}
            />
          </div>
        </div>

        <button className='experienceBtn' onClick={onSendExperience}>Add</button>
      </div>
    </div>
  );
}

export default FormExperience;
