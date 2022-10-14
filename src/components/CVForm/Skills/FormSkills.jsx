import React, { useState } from 'react';
import '../../../styles/CVForm/Skills/FormSkills.css';
import { v4 as uuidv4 } from 'uuid';


function FormSkills (props)
{
  const [input, setInput] = useState([]);

  const onChange = (e) =>
  {
    setInput(e.target.value);
  };

  const onSend = (e) =>
  {
    e.preventDefault();
    const newSkill = 
    {
      id: uuidv4(),
      text: input,
    };
    props.addSkill(newSkill);
    document.getElementById('skill').value = "";
  };

  return (
    <div className='skillsForm'>
      <div>
        <input
          type='text' 
          name='skill' 
          id ='skill' 
          placeholder='Skill' 
          onChange={onChange}
        />
        <button className='skillBtn' onClick={onSend}>Add Skill</button>
      </div>
    </div>
  );
}

export default FormSkills;
