import React from 'react'
import Lottie from 'lottie-react'
import './Login.css'
import Animation2 from '../../assets/Animation2.json'

function Login(){
    return(
        <div className='formContainer'>
            <div className='box'>
                <Lottie animationData={Animation2} loop={true} className='animation'/>
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