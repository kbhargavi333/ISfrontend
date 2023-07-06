import React from 'react';
import './Jobs.css'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import { PiSuitcaseSimpleFill, PiMoneyFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Jobs() {
  return (
    <div className='jobs'>
      <div className='jobcard flex-box'>
      <h2>
      <span>Executive Assistant</span>
      <BsThreeDotsVertical className='threedot' />
      </h2>
        <p>Zuge electric pvt limited</p>
        <p>Bengaluru, India</p>
        <div className='cash'>
          <div className='cashitem'>
            <span className='cashicon'><PiMoneyFill /></span>
            <h3>₹50,000 - ₹1,00,000</h3>
          </div>
          <div className='cashitem'>
            <span className='cashicon'><PiSuitcaseSimpleFill /></span>
            <h3>Fulltime</h3>
          </div>
        </div>
        <h3 className='applystatus'>
          <FaTelegramPlane className='applyicon' />&nbsp; &nbsp;<a className='formapply'><Link to="/Applyform">Apply Easily</Link></a>
        </h3>
        <p>o To organize and manage the top level meetings.</p>
        <p>o Hiring for Executive Assistant cum Financial Analyst.</p>
        <p>o ability to understand/analyse/interpret numbers.</p>
        <p>Active 2days ago &nbsp;&nbsp;&nbsp;More....</p>
      </div>
      <div className='jobcard flex-box'>
      <h2>
      <span>Data Scientist</span>
      <BsThreeDotsVertical className='threedot' />
      </h2>
        <p>Aieditied Software lmtd</p>
        <p>Bengaluru, India</p>
        <div className='cash'>
          <div className='cashitem'>
            <span className='cashicon'><PiMoneyFill /></span>
            <h3>₹50,000 - ₹1,00,000</h3>
          </div>
          <div className='cashitem'>
            <span className='cashicon'><PiSuitcaseSimpleFill /></span>
            <h3>Fulltime</h3>
          </div>
        </div>
        <h3 className='applystatus'>
          <FaTelegramPlane className='applyicon' />&nbsp; &nbsp;<a className='formapply'><Link to="/Applyform">Apply Easily</Link></a>
        </h3>
        <p>o To organize and manage the top level meetings.</p>
        <p>o Hiring for Executive Assistant cum Financial Analyst.</p>
        <p>o ability to understand/analyse/interpret numbers.</p>
        <p>Active 2days ago &nbsp;&nbsp;&nbsp;More....</p>
      </div>
      <div className='jobcard flex-box'>
      <h2>
      <span>Web Development</span>
      <BsThreeDotsVertical className='threedot' />
      </h2>
        <p>Aieditied Software lmtd</p>
        <p>Bengaluru, India</p>
        <div className='cash'>
          <div className='cashitem'>
            <span className='cashicon'><PiMoneyFill /></span>
            <h3>₹50,000 - ₹1,00,000</h3>
          </div>
          <div className='cashitem'>
            <span className='cashicon'><PiSuitcaseSimpleFill /></span>
            <h3>Fulltime</h3>
          </div>
        </div>
        <h3 className='applystatus'>
          <FaTelegramPlane className='applyicon' />&nbsp; &nbsp;<a className='formapply'><Link to="/Applyform">Apply Easily</Link></a>
        </h3>
        <p>o To organize and manage the top level meetings.</p>
        <p>o Hiring for Executive Assistant cum Financial Analyst.</p>
        <p>o ability to understand/analyse/interpret numbers.</p>
        <p>Active 2days ago &nbsp;&nbsp;&nbsp;More....</p>
      </div>
    </div>
  );
}
