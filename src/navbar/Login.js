import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();
    const [login, setlogin] = useState({ username: '', password: '' });
    const changeHandler = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://internshalabackend.onrender.com/api/auth/login', login).then(res => { localStorage.setItem('token', res.data.token);     window.open('/', '_blank');
    }).catch(err => alert(err.response.data));
    }
    return (
        <div className='login1'>
            <h2 className="loghead">Sign-In</h2>
            <form onSubmit={submitHandler} className="loginform">
                <label htmlFor="email">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} required autoComplete='off' />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} required />
                </label>
                <input className='logmainbtn' type="submit" value="Login" />
            </form>
            <div className="createanact">New User? <Link to='/register'>Sign-up</Link> </div>
        </div>
    )
}