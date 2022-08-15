import React from 'react';
import './stephenHome.css';
import { MdAccountCircle } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'

const stephenHome = () => {
  return (
    <>
      <div className="stephen">
        <a href="./" className="settings">
          <div className="account">
            <MdAccountCircle/>
          </div>
        </a>
        <div className="headshot-container">
          <div className="image">
          <a href="./" className="edit-box">
            <div className="edit-icon">
              <FaEdit/>
            </div>
          </a>
        </div>
        </div>
        <div className="information">
          <div className="username">@s_dnlp</div>
          <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur quisquam culpa, magni quo voluptate ipsa blanditiis rem!</div>
        </div>
        <div className="link-array">
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
          <a href="./" className='btn style-three'>Link One</a>
        </div>
        <div className="cta">
          <div className="cta-header">Want to design your very own personalized link page?</div>
          <a href="./" className="cta-btn">Contact Us</a>
        </div>
        <p className="footer">Designed and developed by Stephen Dunlap & Clifford Chirwa</p>
      </div>
    </>
  )
}

export default stephenHome