import React from 'react'
import './Applyform.css'
import Drag from './Drag'
export default function Applyform() {
  return (
    <div className='container1'>
      <div>
      <h2>Name:
      <span className='required-star'>*</span>
      </h2>
      <p>
      <input  className='inputfield' placeholder='firstname' required/>
      <span style={{ marginLeft: '50px' }}></span>
      <input className='inputfield' placeholder='lastname' required/>
      </p>
      </div>
      <div>
        <a className='inputemailphone'>
        <h2>Email:
        <span className='required-star'>*</span>
        </h2>
        <span style={{ marginLeft: '28%' }}></span>
        <h2>
          Phone number:
          <span className='required-star'>*</span>
        </h2>
        </a>
        <input type='email' className='inputfield' placeholder='name@gmail.com' required/>
        <span style={{ marginLeft: '50px' }}></span>
        <input className='inputfield' placeholder='(000) 000-000' required/>
      </div><br/>
      <div>
        <h2>Upload Resume:
        <span className='required-star'>*</span>
        </h2>
      </div>
      <Drag/>
      <div className='afterdrag'>
        <h2>Any Other Documents to Upload:
        </h2>
      </div>
      <Drag/>
      <p className='afterdrag'>You can share certificates,diplomas etc..</p><br/>
      <button className='applybutton'>Apply</button>
    </div>
    
  )
}

