import React from 'react';
import '../styles/Task.css';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Task (props)
{
  function onClickTask ()
  {
    // function activeBtn ()
    // {
    //   let displayBtn = document.querySelectorAll ('.btnTaskContent');

    //   displayBtn.forEach ((item) =>
    //   item.classList.remove('active'));
    //   this.classList.add('active');
    // }
    // let newTask = document.querySelectorAll ('.newTask');
    // newTask.forEach ((item) => item.addEventListener ('click', activeBtn));
  }

  // console.log(props);
  return (
    <div className='newTaskContent'>
      <div className='newTask' onClick={() => props.previewCV(props.user)} >
        <h4>{props.user.inputFirstName}</h4>
        <h2>{props.user.inputLastName}</h2>
      </div>
      <div className='btnTaskContent'>
        <button onClick={() => {props.deleteCV(props.user.id)}}>
          <FaEdit className='editTaskBtn' />
        </button>
        <button onClick={() => {props.deleteCV(props.user.id)}}>
          <RiDeleteBin6Line className='deleteTaskBtn' />
        </button>
      </div>
    </div>
  );
}

export default Task;
