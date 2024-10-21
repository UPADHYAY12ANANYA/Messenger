import React from 'react'
import Lottie from 'lottie-react'
import './Login.css'
import Animation_Login from '../../assets/Animation_Login.json'

function Login(){
    return(
        <div className='formContainer'>
            <div className='box'>
                <Lottie animationData={Animation_Login} loop={true} className='animation'/>
                <div className="formWrapper">
                    <span className="logo">Messenger</span>
                    <span className="title">Login</span>
                    <form action="">
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        
                        <button className='signin'>Sign In</button>
                    </form>
                    <p>You don't have an account? <span>Register</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login