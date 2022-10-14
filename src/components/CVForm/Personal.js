import React, { useState } from 'react';
import '../../styles/CVForm/Personal.css';
import { FaUser, FaUserGraduate, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdAddAPhoto } from "react-icons/md";

function Personal (props)
{
  return (
    <div className='personalInformation'>
      <h2>Personal Information</h2>
      <div>
          <div>
            <div>
              <FaUser className='iconFirstName' />
              <input required
                type='text' 
                name='firstName' 
                id='firstName' 
                placeholder='First Name' 
                onChange={props.handleChange}
              />
            </div>
            <div>
              <FaUser className='iconFirstName' />
              <input required
                type='text' 
                name='lastName' 
                id='lastName' 
                placeholder='Last Name' 
                onChange={props.handleChange}
              />
            </div>
          </div>
          <div>
            <FaUserGraduate className='iconTitle' />
            <input 
              type='text' 
              name='title' 
              id='title' 
              placeholder='Title' 
              onChange={props.handleChange}
            />
          </div>
          <div>
            <FaMapMarkerAlt className='iconAddress' />
            <input 
              type='text' 
              name='address' 
              id='address' 
              placeholder='Address' 
              onChange={props.handleChange}
            />
          </div>
          <div>
            <div>
              <MdAddAPhoto className='iconPhoto' />
              <input
                type='file' 
                name='photo' 
                id='photo' 
                placeholder='Photo' 
                onChange={props.handleChange}
              />
            </div>
            <div>
              <FaPhoneAlt className='iconPhoneNumber' />
              <input 
                type='text' 
                name='phoneNumber' 
                id='phoneNumber' 
                placeholder='Phone Number' 
                onChange={props.handleChange}
              />
            </div>
            <div>
              <MdEmail className='iconEmail' />
              <input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='Email' 
                onChange={props.handleChange}
              />
            </div>
          </div>
          <div>
            <div>
              <FaLinkedin className='iconLinkedIn' />
              <input 
                type='text' 
                name='linkedIn' 
                id='linkedIn' 
                placeholder='LinkedIn' 
                onChange={props.handleChange}
              />
            </div>
            <div>
              <FaGithub className='iconGithub' />
              <input 
                type='text' 
                name='github' 
                id='github' 
                placeholder='Github' 
                onChange={props.handleChange}
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Personal;
