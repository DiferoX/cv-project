import React from 'react';
import '../../styles/CVForm/Form.css';
import Personal from './Personal';

function Form (props)
{
  return (
    <div className='formContent'>
      <Personal addCV={props.addCV} previewCV={props.previewCV} />
    </div>
  );
}

export default Form;
