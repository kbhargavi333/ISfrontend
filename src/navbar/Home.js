import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import {FaTelegramPlane} from 'react-icons/fa'
export default function Home() {
  return (
    <div className='container'>
      <h1>Search,Apply &</h1>
      <h1>Get Your <b>Dream Job</b></h1>
      <button className='jobbutton' ><Link to='/jobs' >Browse Jobs</Link></button>
      <footer className='footer'>
        <h1>Hired in <b>4 Quick easy steps</b></h1>
        <p>The quickest and most effective way to get hired by the top firm working in your<br/> career interest areas. </p>
        <FaTelegramPlane className='telegram'/>
      </footer>
    </div>
  )
}
