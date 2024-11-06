import React from 'react'
import './Input.css'
import Img from "../../assets/img.png"
import Attach from "../../assets/attach.png"

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' className='inputField'/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file"><img src={Img} alt="" /></label>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Input