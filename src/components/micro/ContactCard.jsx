import React from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useStore from '../../store'

const ContactCard = ({ img }) => {
  const navigate = useNavigate()
  const contactsOpen = useStore(state => state.contactsOpen)
  const setContactsOpen = useStore(state => state.setContactsOpen)

  return (
    <div className="thomas p-2 flex gap-3 cursor-pointer transition-all active:scale-95 hover:bg-[#343538] rounded-xl" onClick={() => { setContactsOpen(!contactsOpen); navigate(`/${uuidv4()}`) }}>
        <div className="card-pics rounded-[20px] bg-[#242527] border-[#242527] object-contain h-[44px] w-[44px]">
        <img src={img} alt="" className='rounded-full' />
        </div>
        <div className="details flex flex-col gap-1">
        <p className='font-medium text-sm'>Thomas</p> 
        <div className='flex items-center gap-1'>
            <p className='text-sm'><span className='text-xs text-gray-400'>Hello There! 😎</span></p>
        </div>
        </div>
        <div className="message-count bg-[#FF754C] rounded-lg h-5 w-5 text-xs font-semibold text-white flex items-center justify-center ml-auto self-center">1</div>
    </div>
  )
}

export default ContactCard