import React from 'react'
import './Register.css'
import Avatar from '../../assets/addAvatar.png'

function Register(){
    return(
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Messenger</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder='Display name'/>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file" id='file' style={{display:"none"}}/>
                    <label htmlFor="file"><img src={Avatar} alt="Add Avatar" id="avatar"/></label>
                    <p>Add Avatar</p>
                    <button className='signup'>Sign Up</button>
                </form>
                <p>You do have an account? <span>Login</span></p>
            </div>
        </div>
    )
}

export default Register