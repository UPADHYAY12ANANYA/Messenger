import React from 'react'
import './Chat.css'
import Cam from "../../assets/cam.png"
import Add from "../../assets/add.png"
import More from "../../assets/more.png"
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

function Chat(){
    return(
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={Cam} alt="Cam" />
                    <img src={Add} alt="Add" />
                    <img src={More} alt="More" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat