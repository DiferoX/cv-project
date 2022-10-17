import React from 'react';
import '../../../styles/CVForm/Experience/Experience.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Experience (props)
{
  // console.log(props)
  return (
    <div className = 'experienceContent'>
      <div className = 'experienceText'>
        <p><strong>Company: </strong> {props.user.company}</p>
        <p><strong>City: </strong> {props.user.city}</p>
        <p><strong>Position: </strong> {props.user.position}</p>
        <p><strong>From: </strong> {props.user.startDate}, <strong>To: </strong> {props.user.endDate}</p>
      </div>
      <div className='experienceIconContent'
        onClick={() => props.deleteExperience(props.id)}>
        <AiOutlineCloseCircle className='experienceIcon' />
      </div>
    </div>
  );
}

export default Experience;
