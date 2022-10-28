import React from 'react';
import '../../styles/CVPreview/Preview.css';
import { FaInternetExplorer, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Preview (props)
{
  // console.log (props.previewCV);

  return (
    <div className='previewMainContent'>
      <div className='previewHeadContent'>
        <div className='previewAvatarContent'>
          <div className='avatar'>
            {
              props.previewCV && (props.previewCV.photo !== undefined && props.previewCV.photo !== '')
              ? <img src={require(`../../images/${props.previewCV.photo}`)} /> 
              : <img src={require(`../../images/avatar.png`)} />
            }
          </div>
        </div>
        <div className='previewAboutContent'>
          <h3>ABOUT ME</h3>
          <p>{props.previewCV && (props.previewCV.about !== undefined && props.previewCV.about !== '') 
            ? props.previewCV.about 
            : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab perferendis odit harum! In eos libero cupiditate necessitatibus earum quo sequi ea ipsam veritatis corrupti! Similique eligendi at porro aliquam totam!'}
          </p>
        </div>
      </div>
      <div className='previewMiddlebarContent'>
        <div className='previewNameUserContent'>
          <h4>{props.previewCV ? props.previewCV.firstName : 'First Name'}</h4>
          <h2>{props.previewCV ? props.previewCV.lastName : 'Last Name'}</h2>
        </div>
        <div className='previewTitleUserContent'>
          <p>{props.previewCV ? props.previewCV.title : 'Title'}</p>
        </div>
      </div>
      <div className='previewBottomContent'>
        <div className='previewSidebarContent'>
          <div className='previewContactsContent'>
            <h4>CONTACTS</h4>
            <div>
              <div>
                <FaPhoneAlt className='iconPhoneNumber' />
                <p>{props.previewCV && (props.previewCV.phoneNumber !== undefined && props.previewCV.phoneNumber !== '') 
                  ? props.previewCV.phoneNumber 
                  : '+12 345 6789'}
                </p>
              </div>
              <div>
                <FaMapMarkerAlt className='iconAddress' />
                <p>{props.previewCV && (props.previewCV.address !== undefined && props.previewCV.address !== '') 
                  ? props.previewCV.address 
                  : 'Dummy Street 123'}
                </p>
              </div>
              <div>
                <MdEmail className='iconEmail' />
                <p>{props.previewCV && (props.previewCV.email !== undefined && props.previewCV.email !== '') 
                  ? props.previewCV.email 
                  : 'info@info.com'}
                </p>
              </div>
              <div>
                <FaLinkedin className='iconLinkedIn' />
                <p>{props.previewCV && (props.previewCV.linkedIn !== undefined && props.previewCV.linkedIn !== '') 
                  ? props.previewCV.linkedIn 
                  : ''}
                </p>
              </div>
              <div>
                <FaGithub className='iconGithub' />
                <p>{props.previewCV && (props.previewCV.github !== undefined && props.previewCV.github !== '') 
                  ? props.previewCV.github 
                  : ''}
                </p>
              </div>
              <div>
                <FaInternetExplorer className='iconURL' />
                <p>{props.previewCV && (props.previewCV.url !== undefined && props.previewCV.url !== '') 
                  ? props.previewCV.url 
                  : ''}
                </p>
              </div>
            </div>
          </div>
          <div className='previewSkillsContent'>
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
        <div className='previewEduExpContent'>
          <div className='previewEducationContent'>
            <h5>EDUCATION</h5>
              {
                props.previewCV
                ? props.previewCV.education.map((education) => 
                  <div key={education.id}>
                    <div className='previewEducationDate'>
                      <p><strong>{education.startDate}</strong></p>
                      <p><strong>{education.endDate}</strong></p>
                    </div> 
                    <div className='previewEducationInfo'>
                      <p><strong>School: </strong> {education.school}</p>
                      <p><strong>City: </strong> {education.city}</p>
                      <p><strong>Degree: </strong> {education.degree}</p>
                    </div>
                  </div>
                ) : ''
              }
          </div>
          <div className='previewExperienceContent'>
            <h5>EXPERIENCE</h5>
              {
                props.previewCV
                ? props.previewCV.experience.map((experience) => 
                  <div key={experience.id}>
                    <div className='previewExperienceDate'>
                      <p><strong>{experience.startDate}</strong></p>
                      <p><strong>{experience.endDate}</strong></p>
                    </div> 
                    <div className='previewExperienceInfo'>
                      <p><strong>Company: </strong> {experience.company}</p>
                      <p><strong>City: </strong> {experience.city}</p>
                      <p><strong>Position: </strong> {experience.position}</p>
                    </div>
                  </div>
                ) : ''
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
