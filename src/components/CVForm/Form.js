import React, { useState } from 'react';
import '../../styles/CVForm/Form.css';
import Personal from './Personal';
import ListSkills from './Skills/ListSkills';
import ListEducation from './Education/ListEducation';
import ListExperience from './Experience/ListExperience';

function Form (props)
{
  const [data, setData] = useState(
    // {
    //   firstName: '',
    //   lastName: '',
    //   address: '',
    //   photo: '',
    //   phoneNumber: '',
    //   email: '',
    //   linkedIn: '',
    //   github: ''
    // }
  );

  const handleChange = (e) => 
  {
    setData({ ...data, [e.target.name] : e.target.value })
  };

  const handleSkillsChange = (newSkill) => 
  {
    setData({ ...data, skills : newSkill })
  };

  const handleEducationChange = (newEducation) => 
  {
    setData({ ...data, education : newEducation })
  };

  const handleExperienceChange = (newExperience) => 
  {
    setData({ ...data, experience : newExperience })
  };

  const [checkbox, setCheckbox] = useState(true);
  const handleCheckboxChange = () => 
  {
    let display = document.getElementsByClassName('displayFormContent');

    setCheckbox(!checkbox)
    if (checkbox)
    {
      display[0].classList.remove('active');
      display[1].classList.add('active');
    }
    else
    {
      display[1].classList.remove('active');
      display[0].classList.add('active');
    }
  };

  function onSubmit (e)
  {
    e.preventDefault();
    props.addCV(data);
    e.target.reset();

    console.log(data);
  }

  return (
    <div className='formMainContent'>
      <form onSubmit={onSubmit} className='formContent'>
        <div className='displayFormContent active'>
          <Personal handleChange={handleChange} />
          <ListSkills handleSkillsChange={handleSkillsChange} />
        </div>
        <div className='displayFormContent'>
          <ListEducation handleEducationChange={handleEducationChange} />
          <ListExperience handleExperienceChange={handleExperienceChange} />
          <div className='submitBtnContent'>
            <button type='submit' className='submitBtn'>Send</button>
          </div>
        </div>
        <div className='radioContent'>
          <input type='radio' name='inputRadio' id='radio1' onChange={handleCheckboxChange} />
          <input type='radio' name='inputRadio' id='radio2' onChange={handleCheckboxChange} />
        </div>
        
      </form>
    </div>
  );
}

export default Form;
