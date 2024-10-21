import React from 'react'
import Lottie from 'lottie-react'
import './Register.css'
import Avatar from '../../assets/addAvatar.png'
import Animation from '../../assets/Animation.json'

function Register(){
    return(
        <div className='formContainer'>
            <div className='box'>
                <Lottie animationData={Animation} loop={true} className='animation'/>
                <div className="formWrapper">
                    <span className="logo">Messenger</span>
                    <span className="title">Register</span>
                    <form action="">
                        <input type="text" placeholder='Display name'/>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="file" id='file' style={{display:"none"}}/>
                        <div className='fileUpload'>
                            <label htmlFor="file"><img src={Avatar} alt="Add Avatar" id="avatar"/></label>
                            <p>Add Avatar</p>
                        </div>
                        
                        <button className='signup'>Sign Up</button>
                    </form>
                    <p>You do have an account? <span>Login</span></p>
                </div>
            </div>
        </div>
    )
}

export default Register