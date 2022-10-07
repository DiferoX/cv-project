import React from 'react';
import '../../styles/CVPreview/Preview.css';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Preview ()
{
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
          <h4>COSME</h4>
          <h2>FULANITO</h2>
          <p>Web Developer</p>
        </div>
        <div className='previewContent2-2'>Content 2-2</div>
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
                <p>Evergreen Terrace 742, Springfield</p>
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
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
              <li>Skill 5</li>
              <li>Skill 6</li>
            </ul>
          </div>
        </div>
        <div className='previewContent4'>Content 4</div>
      </div>
    </div>
  );
}

export default Preview;
