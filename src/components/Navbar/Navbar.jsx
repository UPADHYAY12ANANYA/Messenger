import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo-name'>Messenger</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="icon" className='icon'/>
            <span className="username">John</span>
            <button className='logout'>Logout</button> 
        </div>
    </div>
  )
}

export default Navbar