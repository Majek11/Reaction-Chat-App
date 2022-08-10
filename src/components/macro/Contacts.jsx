import { useState } from 'react'
import { BsDot, BsPlus } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import { FaRegStar } from 'react-icons/fa'
import { HiBell } from 'react-icons/hi'
import { TiWiFi } from 'react-icons/ti'
import { RiEditCircleLine, RiSearchLine } from 'react-icons/ri'
import { IoMdCheckmark } from 'react-icons/io'
import { IoChatbubbles } from 'react-icons/io5'
import Img from '../../assets/images/12345.jpg'
import ContactCard from '../micro/ContactCard'
import useStore from '../../store'

const Contacts = () => {
  const [showNotification, setShowNotification] = useState(false)
  const contactsOpen = useStore(state => state.contactsOpen)

  return (
    <div className={`w-[320px] border-r border-[#202020] p-4 lg:px-8 py-4 flex flex-col overflow-y-auto fixed md:static h-full z-50 ${contactsOpen ? 'left-0' : '-left-full'} transition-all bg-[#161719] no-bar`}>
      {/* profile card section */}
        <div className="profile-card flex w-100% h-35 justify-between">
          <div className="card-pics relative rounded-[16px] bg-[#242527] border-[#242527] border-[6px] object-contain h-[50px] w-[50px]">
            <img src={Img} alt="" className='rounded-xl scale-[]' />
            <div className="indicator absolute h-4 w-[3px] bg-blue-500 rounded-md top-1/2 left-[-6px] -translate-y-1/2"></div>
          </div>
          <div className="msg-menu flex gap-1 items-center cursor-pointer" onClick={() => setShowNotification(!showNotification)}>
            <IoChatbubbles className='text-blue-500' size={22} />
            <p className='font-semibold'>All</p>
            <FiChevronDown className='text-gray-500' size={18} />
          </div> 
        </div>

        {/* Workspace section */}
        {showNotification &&
          <div className="workspace mt-4 bg-[#2a2b2d] rounded-[20px] flex-row">

          {/*thomas sec  */}
          <div className="p-4 py-3 flex gap-3 border-b border-[#343538]">
            <div className="card-pics rounded-[16px] bg-[#242527] border-[#242527] border-[5px] object-contain h-12 w-12">
              <img src={Img} alt="" className='rounded-xl' />
            </div>
            <div className="name">
              <p className='font-semibold text-sm'>Thomas</p> 
              <div className='flex items-center gap-1'>
                <HiBell className='text-orange-500' />
                <p className='text-sm'>219 <span className='text-xs text-gray-400'>new</span></p>
              </div>
            </div>
            <IoMdCheckmark size={24} className='text-blue-500 ml-auto self-center' />
          </div>

            {/* Stuart sec */}
          <div className="stuart-books p-4 py-3 flex gap-3 text-sm border-b border-[#343538]">
            <div className="av-img flex items-center justify-center bg-[#44A8F6] text-[20px] font-extrabold rounded-[15px] w-12 h-12">S</div>
            <div className="stuart-name flex flex-col gap-1 relative">
              <p className='text-sm'>Stuart Brooks</p> 
              <div className="requester flex items-center gap-1">
                <figure className='w-4 h-4 rounded-full bg-yellow-500'></figure>
                <p className='text-xs'>1 <span className='text-gray-400'>new request</span></p>
              </div>
            </div>
          </div>
          
          {/* create workspace */}
          <div className="worksection flex justify-center items-center gap-2 p-3 mb-4">
            <div className='flex items-center bg-[#715bfc] w-4 h-4 rounded-full'>
              <BsPlus />
            </div>
            <p className='text-[14px] font-medium'>Create new workspace</p>
          </div>
        </div>}

        {/* Contacts section */}
        <div className="contacts p-1 flex flex-col flex-1">
          <header className='flex items-center justify-between text-gray-400 py-4'>
            <div className="left flex items-center">
              <p className='text-lg text-gray-400 font-medium'>Messages</p>
              <div className="indicator w-[4px] h-[4px] rounded-full bg-red-600 mx-3 mr-2"></div>
              <FiChevronDown className='text-[#a57b6e]' size={18} />
            </div>

            <div className="right flex items-center gap-3">
              <button>
                <RiEditCircleLine size={20} />
              </button>
              <button className='relative -top-[1px]'>
                <FaRegStar size={20} />
              </button>
            </div>
          </header>
          <div className="search-area bg-[#1B1D1E] text-gray-500 rounded-lg h-9 relative text-xs">
            <input type="text" placeholder='Search' className='w-full h-full rounded-lg p-4 pl-9 bg-transparent outline-none' />
            <RiSearchLine className='absolute top-1/2 -translate-y-1/2 left-3' size={15} />
          </div>
          <div className={`contacts-list py-3 flex flex-col gap-2 overflow-auto ${showNotification ? 'max-h-[280px]' : ''} no-bar`}>
            <ContactCard img={Img} />
            <ContactCard img={Img} />
            <ContactCard img={Img} />
            <ContactCard img={Img} />
            <ContactCard img={Img} />
          </div>
          <div className="live-chat bg-[#252628] w-[260px] h-16 rounded-2xl p-5 text-gray-600 flex items-center bottom-5" style={{ position: showNotification ? 'static' : 'absolute' }}>
            <button className="flex">
              <BsDot size={24} />
              <BsDot size={24} className="relative -left-4" />
            </button>

            <div className="badge border border-[#313435] flex items-center p-1 px-[6px] gap-1 rounded-lg relative -left-2">
              <TiWiFi color='#FF754C' size={12} />
              <span className='text-[10px] font-bold text-white'>LIVE</span>
            </div>

            <p className='text-xs text-gray-500 font-semibold ml-1'>23:54</p>

            <div className="participants self-stretch flex ml-auto">
              <div className="w-5 h-5 rounded-full bg-gray-600"></div>
              <div className="w-5 h-5 rounded-full bg-gray-600 border-2 border-[#252628] relative -left-2 top-2"></div>
            </div>
            <div className="participant-count bg-[#FF754C] rounded-md h-4 w-5 text-xs font-semibold text-white flex items-center justify-center">5</div>
          </div>
        </div>
    </div>
  )
}

export default Contacts