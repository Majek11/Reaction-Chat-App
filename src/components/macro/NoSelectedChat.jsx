import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RiApps2Line } from 'react-icons/ri'
import { TiPen } from 'react-icons/ti'
import useStore from '../../store'

const NoSelectedChat = () => {
    const contactsOpen = useStore(state => state.contactsOpen)
    const setContactsOpen = useStore(state => state.setContactsOpen)
  return (
    <div className='no-selected-chat flex flex-col justify-center items-center p-5 text-center'>
        <button className="text-gray-400 top-8 right-8 absolute md:hidden" onClick={() => setContactsOpen(!contactsOpen)}>
            {!contactsOpen ? <RiApps2Line size={22} /> :  <IoCloseOutline size={22} />}
          </button>
        <TiPen size={50} className="text-gray-300 animate-pen" />
        <h1 className='text-xl text-gray-300'>No Ongoing Conversations</h1>
        <p className='text-sm text-gray-500'>Click on a contact to start a chat</p>
    </div>
  )
}

export default NoSelectedChat