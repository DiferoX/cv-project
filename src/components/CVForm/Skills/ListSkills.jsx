import React, { useState } from 'react';
import '../../../styles/CVForm/Skills/ListSkills.css';
import FormSkills from './FormSkills';
import Skill from './Skill';

function ListSkills (props)
{
  const [skills, setSkills] = useState([]);

  const addSkill = (skill) =>
  {
    if (skill.text.trim())
    {
      skill.text = skill.text.trim();
      const skillUpdated = [...skills, skill];
      setSkills(skillUpdated);
      props.handleSkillsChange(skillUpdated);
    }
    // console.log(skills);
  };

  const deleteSkill = (id) =>
  {
    const skillUpdated = skills.filter(skill => skill.id !== id);
    setSkills(skillUpdated);
  };

  return (
    <div className='skillsInformation'>
      <h2>Skills</h2>
      <div>
        <div className='skillListContent'>
          {
            skills.map((skill) => 
              <Skill
                key={skill.id}
                id={skill.id}
                text={skill.text}
                deleteSkill={deleteSkill}
              />
            )
          }
        </div>
        <FormSkills addSkill={addSkill} />
      </div>
    </div>
  );
}

export default ListSkills;
