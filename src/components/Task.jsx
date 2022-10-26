import React, { Children } from 'react';
import '../styles/Task.css';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Task (props)
{
  function onClickTask ({ id })
  {
    let allTasks = document.querySelectorAll ('.btnTaskContent');

    allTasks.forEach ((item) => 
    {
      item.classList.remove('active');
      if (item.childNodes[2].textContent === id)
        item.classList.add('active');
    });
  }

  return (
    <div className='newTaskContent'>
      <div className='newTask' onClick={() => {props.previewCV(props.user); onClickTask(props.user)} } >
        <h4>{props.user.firstName}</h4>
        <h2>{props.user.lastName}</h2>
      </div>
      <div className='btnTaskContent'>
        <button onClick={() => {props.deleteCV(props.user.id)}}>
          <FaEdit className='editTaskBtn' />
        </button>
        <button onClick={() => {props.deleteCV(props.user.id)}}>
          <RiDeleteBin6Line className='deleteTaskBtn' />
        </button>
        <p>{props.user.id}</p>
      </div>
    </div>
  );
}

export default Task;
