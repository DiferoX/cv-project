import React from 'react';
import '../../../styles/CVForm/Skills/Skill.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Skill ({id, text, deleteSkill })
{
  return (
    <div className = 'skillContent'>
      <div className = 'skillText'>
        {text}
      </div>
      <div className='skillIconContent'
        onClick={() => deleteSkill(id)}>
        <AiOutlineCloseCircle className='skillIcon' />
      </div>
    </div>
  );
}

export default Skill;
