import React from 'react';
import '../styles/Main.css';
import Form from './Form';
import Preview from './Preview';

class Main extends React.Component
{
  render()
  {
    return (
      <div className='main'>
        <Form />
        <Preview />
      </div>
    );
  }
}

export default Main;
