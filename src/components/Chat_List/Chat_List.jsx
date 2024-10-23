import React from 'react'
import './Chat_List.css'

function Chat_List() {
  return (
    <div className='chatList'>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic"/>
            <div className="userChatInfo">
                <span className='name'>Jane</span>
                <p className='msg'>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic"/>
            <div className="userChatInfo">
                <span className='name'>Jane</span>
                <p className='msg'>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic"/>
            <div className="userChatInfo">
                <span className='name'>Jane</span>
                <p className='msg'>Hello</p>
            </div>
        </div>

        <div className="userChat">
            <img src="https://images.pexels.com/photos/1104007/pexels-photo-1104007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="profilePic"/>
            <div className="userChatInfo">
                <span className='name'>Jane</span>
                <p className='msg'>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chat_List