import React, { useState } from 'react';
import '../../../styles/CVForm/Education/ListEducation.css';
import FormEducation from './FormEducation';
import Education from './Education';

function ListEducation (props)
{
  const [educational, setEducational] = useState([]);

  const addEducation = (education) =>
  {
    const educationUpdated = [...educational, education];
    setEducational(educationUpdated);
    props.handleEducationChange(educationUpdated);
    // console.log(educational);
  };

  const deleteEducation = (id) =>
  {
    const educationUpdated = educational.filter(education => education.id !== id);
    setEducational(educationUpdated);
  };

  return (
    <div className='educationInformation'>
      <h2>Education</h2>
      <div>
        <div className='educationListContent'>
          {
            educational.map((education) => 
              <Education
                key={education.id}
                id={education.id}
                user={education}
                deleteEducation={deleteEducation}
              />
            )
          }
        </div>
        <FormEducation addEducation={addEducation} />
      </div>
    </div>
  );
}

export default ListEducation;
