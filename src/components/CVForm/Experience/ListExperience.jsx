import React, { useState } from 'react';
import '../../../styles/CVForm/Experience/ListExperience.css';
import FormExperience from './FormExperience';
import Experience from './Experience';

function ListExperience (props)
{
  const [experiences, setExperiences] = useState([]);

  const addExperience = (experience) =>
  {
    const experienceUpdated = [...experiences, experience];
    setExperiences(experienceUpdated);
    props.handleExperienceChange(experienceUpdated);
    // console.log(experiences);
  };

  const deleteExperience = (id) =>
  {
    const experienceUpdated = experiences.filter(experience => experience.id !== id);
    setExperiences(experienceUpdated);
  };

  return (
    <div className='experienceInformation'>
      <h2>Experience</h2>
      <div>
        <div className='experienceListContent'>
          {
            experiences.map((experience) => 
              <Experience
                key={experience.id}
                id={experience.id}
                user={experience}
                deleteExperience={deleteExperience}
              />
            )
          }
        </div>
        <FormExperience addExperience={addExperience} />
      </div>
    </div>
  );
}

export default ListExperience;
