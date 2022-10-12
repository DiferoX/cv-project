import React, { useState } from 'react';
import '../../styles/CVForm/Personal.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";

function Personal (props)
{
  const [data, setData] = useState(
    {
      inputFirstName: '',
      inputLastName: '',
      inputAddress: '',
      inputPhoto: '',
      inputPhoneNumber: '',
      inputEmail: '',
      inputLinkedIn: '',
      inputGithub: ''
    }
  );

  const handleInputChange = (e) => 
  {
    setData({ ...data, [e.target.name] : e.target.value })
    // props.previewCV(data)
  };

  function onSubmit (e)
  {
    e.preventDefault();
    props.addCV(data);
    e.target.reset()
    // console.log(data);
  }

  return (
    <div className='personalInformation'>
      <h2>Personal Information</h2>
      <form onSubmit={onSubmit}>
          <div>
            <div>
              <FaUser className='iconFirstName' />
              <input 
                type='text' 
                name='inputFirstName' 
                id='inputFirstName' 
                placeholder='First Name' 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FaUser className='iconFirstName' />
              <input 
                type='text' 
                name='inputLastName' 
                id='inputLastName' 
                placeholder='Last Name' 
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <FaMapMarkerAlt className='iconAddress' />
            <input 
              type='text' 
              name='inputAddress' 
              id='inputAddress' 
              placeholder='Address' 
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div>
              <MdAddAPhoto className='iconPhoto' />
              <input
                type='file' 
                name='inputPhoto' 
                id='inputPhoto' 
                placeholder='Photo' 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FaPhoneAlt className='iconPhoneNumber' />
              <input 
                type='text' 
                name='inputPhoneNumber' 
                id='inputPhoneNumber' 
                placeholder='Phone Number' 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <MdEmail className='iconEmail' />
              <input 
                type='email' 
                name='inputEmail' 
                id='inputEmail' 
                placeholder='Email' 
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <div>
              <FaLinkedin className='iconLinkedIn' />
              <input 
                type='text' 
                name='inputLinkedIn' 
                id='inputLinkedIn' 
                placeholder='LinkedIn' 
                onChange={handleInputChange}
              />
            </div>
            <div>
              <FaGithub className='iconGithub' />
              <input 
                type='text' 
                name='inputGithub' 
                id='inputGithub' 
                placeholder='Github' 
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default Personal;
