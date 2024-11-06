import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import Lottie from 'lottie-react'
import AnimationChat from '../../assets/Animation_Chat.json'

function Home(){
    return(
        <div className='home'>
            {/* <Lottie animationData={AnimationChat} loop={true} className='animationChat'/> */}
            <div className="container">
                <Sidebar />
                <Chat />

            </div>
        </div>
    )
}

export default Home