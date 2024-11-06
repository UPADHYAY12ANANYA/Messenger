import React from 'react'
import './Message.css'

function Message() {
  return (
    //given two class name to main div.
    <div className='message  owner'>  
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default Message