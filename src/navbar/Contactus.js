import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaLeaf} from 'react-icons/fa'
import './Contactus.css'
export default function Contactus() {
  return (
    <div className='card'>
      <div className='contact'>
     <h2>Email id: jobhunt123@jh.in</h2> 
     <h2>Phone   : +81 8523698515</h2>
     {/* <a href=''><FaInstagramSquare className='icon'/> </a>
     <a href=''><FaFacebook className='icon'/> </a>
     <a href=''><BsTwitter className='icon'/> </a>
     <a href=''><AiFillGoogleCircle className='icon'/> </a> */}
     <a href=""><FaInstagramSquare className='icon'/></a>
     <a href=""><FaFacebook className='icon'/></a>
     <a href=""><BsTwitter className='icon'/></a>
     <a href=""><AiFillGoogleCircle className='icon'/></a>    
     </div>
    </div>
  )
}
