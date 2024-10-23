import React from 'react'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import ChatList from '../Chat_List/Chat_List'

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <ChatList />
    </div>
  )
}

export default Sidebar