import React from 'react';
import '../../styles/CVForm/Personal.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";

function Personal ()
{
  return (
    <div className='personalInformation'>
      <h2>Personal Information</h2>
      <form>
          <div>
            <div>
              <FaUser className='iconFirstName' />
              <input 
                type='text' 
                name='inputFirstName' 
                id='inputFirstName' 
                placeholder='First Name' 
              />
            </div>
            <div>
              <FaUser className='iconFirstName' />
              <input 
                type='text' 
                name='inputLastName' 
                id='inputLastName' 
                placeholder='Last Name' 
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
              />
            </div>
            <div>
              <FaPhoneAlt className='iconPhoneNumber' />
              <input 
                type='text' 
                name='inputPhoneNumber' 
                id='inputPhoneNumber' 
                placeholder='Phone Number' 
              />
            </div>
            <div>
              <MdEmail className='iconEmail' />
              <input 
                type='email' 
                name='inputEmail' 
                id='inputEmail' 
                placeholder='Email' 
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
              />
            </div>
            <div>
              <FaGithub className='iconGithub' />
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
