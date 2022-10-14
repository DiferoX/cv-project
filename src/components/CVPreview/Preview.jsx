import React from 'react';
import '../../styles/CVPreview/Preview.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Preview (props)
{
  // console.log (props.previewCV);

  return (
    <div className='previewMainContent'>
      {/* <FaUser className='imgProfile' /> */}
      <div className='previewContent1'>
        <div className='previewContent1-1'>
          {/* <FaUser className='imgProfile' /> */}
          <div className='avatar'></div>
        </div>
        <div className='previewContent1-2'>
          <h3>ABOUT ME</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab perferendis odit harum! In eos libero cupiditate necessitatibus earum quo sequi ea ipsam veritatis corrupti! Similique eligendi at porro aliquam totam!</p>
        </div>
      </div>
      <div className='previewContent2'>
        <div className='previewContent2-1'>
          <h4>{props.previewCV ? props.previewCV.firstName : 'First Name'}</h4>
          <h2>{props.previewCV ? props.previewCV.lastName : 'Last Name'}</h2>
        </div>
        <div className='previewContent2-2'>
          <p>{props.previewCV ? props.previewCV.title : 'Title'}</p>
        </div>
      </div>
      <div className='previewContent3'>
        <div className='previewContent3-1'>
          <div className='previewContent3-1-1'>
            <h4>CONTACTS</h4>
            <div>
              <div>
                <FaPhoneAlt className='iconPhoneNumber' />
                <p>+12 345 6789</p>
              </div>
              <div>
                <FaMapMarkerAlt className='iconAddress' />
                <p>{props.previewCV ? props.previewCV.address : 'Dummy Street 123'}</p>
              </div>
              <div>
                <MdEmail className='iconEmail' />
                <p>info@info.com</p>
              </div>
              <div>
                <FaLinkedin className='iconLinkedIn' />
                <p>CosmeFulanito</p>
              </div>
              <div>
                <FaGithub className='iconGithub' />
                <p>github.com/Fulanito</p>
              </div>
            </div>
          </div>
          <div className='previewContent3-1-2'>
            <h4>SKILLS</h4>
            <ul>
              {
                props.previewCV
                ? props.previewCV.skills.map((skill) => 
                  <li key={skill.id}>
                    {skill.text}
                  </li> 
                ) : 'Skill'
              }
            </ul>
          </div>
        </div>
        <div className='previewContent4'>Content 4</div>
      </div>
    </div>
  );
}

export default Preview;
