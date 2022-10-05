import React from 'react';
import '../../styles/CVForm/Personal.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Personal ()
{
  return (
    <div className='personalInformation'>
      <h2>Personal Information</h2>
      <form>
          <div>
            <div>
              <FaUser className='IconFirstName' />
              <input 
                type='text' 
                name='inputFirstName' 
                id='inputFirstName' 
                placeholder='First Name' 
              />
            </div>
            <div>
              <FaUser className='IconFirstName' />
              <input 
                type='text' 
                name='inputLastName' 
                id='inputLastName' 
                placeholder='Last Name' 
              />
            </div>
          </div>
          <div>
            <FaMapMarkerAlt className='IconAddress' />
            <input 
              type='text' 
              name='inputAddress' 
              id='inputAddress' 
              placeholder='Address' 
            />
          </div>
          <div>
            <div>
              <FaPhoneAlt className='IconPhoneNumber' />
              <input 
                type='text' 
                name='inputPhoneNumber' 
                id='inputPhoneNumber' 
                placeholder='Phone Number' 
              />
            </div>
            <div>
              <MdEmail className='IconEmail' />
              <input 
                type='text' 
                name='inputEmail' 
                id='inputEmail' 
                placeholder='Email' 
              />
            </div>
          </div>
          <div>
            <div>
              <FaLinkedin className='IconLinkedIn' />
              <input 
                type='text' 
                name='inputLinkedIn' 
                id='inputLinkedIn' 
                placeholder='LinkedIn' 
              />
            </div>
            <div>
              <FaGithub className='IconGithub' />
              <input 
                type='text' 
                name='inputGithub' 
                id='inputGithub' 
                placeholder='Github' 
              />
            </div>
          </div>
      </form>
    </div>
  );
}

export default Personal;
