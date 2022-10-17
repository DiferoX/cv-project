import React from 'react';
import '../../../styles/CVForm/Education/Education.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Education (props)
{
  // console.log(props)
  return (
    <div className = 'educationContent'>
      <div className = 'educationText'>
        <p><strong>School: </strong> {props.user.school}</p>
        <p><strong>City: </strong> {props.user.city}</p>
        <p><strong>Degree: </strong> {props.user.degree}</p>
        <p><strong>From: </strong> {props.user.startDate}, <strong>To: </strong> {props.user.endDate}</p>
      </div>
      <div className='educationIconContent'
        onClick={() => props.deleteEducation(props.id)}>
        <AiOutlineCloseCircle className='educationIcon' />
      </div>
    </div>
  );
}

export default Education;
