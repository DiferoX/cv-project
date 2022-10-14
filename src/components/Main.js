import React, { useState } from 'react';
import '../styles/Main.css';
import Form from './CVForm/Form';
import Preview from './CVPreview/Preview';
import Task from './Task';


function Main (props)
{
  const [userPreview, setUserPreview] = useState();
  const previewCV = (user) => { setUserPreview(user) };

  return (
    <div className='main'>
      <Form 
        addCV={props.addCV} 
        previewCV={userPreview}
      />
      <Preview previewCV={userPreview} />
      <div className='taskContent'>
        {
          props.users.map(user => 
          (
            <Task 
              key={user.id}
              user={user}
              deleteCV={props.deleteCV}
              previewCV={previewCV}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Main;
