import React from 'react'
import { Outlet } from 'react-router-dom'
import Contacts from '../components/macro/Contacts'

const ChatScreen = () => {
  return (
    <div className='chat_screen h-screen grid grid-cols-1 md:grid-cols-[auto_1fr] bg-[#161719] overflow-x-hidden text-white'>
        <Contacts />
        <Outlet />
    </div>
  )
}

export default ChatScreen