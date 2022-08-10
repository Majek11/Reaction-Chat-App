import { useState } from 'react'
import {BsChat, BsChatSquareDots, BsFillFolderFill, BsTelephone} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'
import img from '../../assets/images/12345.jpg'
import useStore from '../../store'
import CustomCheckbox from '../micro/CustomCheckbox'
import FavoriteCheck from '../micro/FavoriteCheck'



const ConversationDetails = () => {
  const [newTasksOverlay, setNewTasksOverlay] = useState(true)
  const chatDetailsOpen = useStore(state => state.chatDetailsOpen)
  const setChatDetailsOpen = useStore(state => state.setChatDetailsOpen)

  return (
    <div className={`w-[300px] bg-[#191D1E] h-full fixed lg:relative ${chatDetailsOpen ? 'right-0 z-50' : '-right-[100%]'} ${chatDetailsOpen ? 'lg:right-0' : 'lg:fixed lg:-right-full'} p-8 py-4 flex flex-col gap-8 overflow-y-auto transition-all no-bar`}>

        <div className="header flex items-center gap-5">
          <BsChatSquareDots size={16} />
          <h2 className='font-medium text-sm'>Chat Details</h2>

          <button className='cancel ml-auto bg-[#2a2f30] p-1 rounded-full' onClick={() => setChatDetailsOpen(false)}>
            <IoCloseOutline size={18} />
          </button>
        </div>
        
        <div className='members flex gap-2 flex-col'>
            <div className="member-title flex items-center justify-between mb-2">
              <p className="text-xs text-stone-500"> Members <span className="text-[12px] text-white ml-[2px]">8</span> </p>
              <IoIosArrowDown size={14} color='yellow' />
            </div>

            <div className="user flex items-center gap-2">
              <div className="card-pics rounded-[20px] bg-[#242527] border-[#242527] object-contain h-6 w-6">
                <img src={img} alt="" className='rounded-full w-full' />
              </div>
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>Ingrid Krol <span className='font-normal text-[9px] text-yellow-400 relative -top-1'>Creator</span> </h3>
              <BsTelephone className='text-gray-400 mr-1' />
              <BsChat className='text-gray-400' />
            </div>

            <div className='user flex items-center gap-2'>
                <div className="card-pics rounded-[20px] bg-[#242527] border-[#242527] object-contain h-6 w-6">
                  <img src={img} alt="" className='rounded-full w-full' />
                </div>
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>Thomas Hayes  </h3>
              <BsTelephone className='text-gray-600 mr-1' />
              <BsChat className='text-gray-400' />
            </div>

            <div className='user flex items-center gap-2'>
                <div className="card-pics rounded-[20px] bg-[#242527] border-[#242527] object-contain h-6 w-6">
                  <img src={img} alt="" className='rounded-full w-full' />
                </div>
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>Colddecember  </h3>
              <BsChat className='text-gray-400' />
            </div>

        </div>

        <div className='media mt-5'>
          <div className="member-title flex items-center justify-between mb-4">
            <p className="text-xs text-stone-500"> Media <span className="text-[12px] text-white ml-[2px]">1369</span> </p>
            <IoIosArrowDown size={14} color='yellow' />
          </div>

          <div className='media-list flex gap-[6px]'>
              <figure className='w-[50px] h-[50px]'>
                <img className='w-full rounded-lg' src={img} alt="" />
              </figure>
              <figure className='w-[50px] h-[50px]'>
                <img className='w-full rounded-lg' src={img} alt="" />
              </figure>
              <figure className='w-[50px] h-[50px]'>
                <img className='w-full rounded-lg' src={img} alt="" />
              </figure>
              
              <div className='media-count w-[50px] h-[50px] rounded-lg bg-[#28292D] flex items-center justify-center p-3 text-[10px] font-medium'>+1366</div>
          </div>
        </div>

        <div className='tasks flex flex-col gap-4 relative overflow-hidden' style={{ height: newTasksOverlay ? '140px' : 'auto' }}>

          <div className="member-title flex items-center justify-between mb-2">
            <p className="text-xs text-stone-500"> Tasks <span className="text-[12px] text-white ml-[2px]">19</span> </p>
            <IoIosArrowDown size={14} color='yellow' />
          </div>

          <div className='task flex gap-3 items-center'>
            <CustomCheckbox />
              <FavoriteCheck />
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>Design System</h3>
            <BsFillFolderFill className='text-gray-500' />
          </div>

          <div className='task flex gap-3 items-center'>
            <CustomCheckbox />
              <FavoriteCheck />
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>Dark Mode</h3>
            <BsFillFolderFill className='text-gray-500' />
          </div>
          
          <div className='task flex gap-3 items-center'>
            <CustomCheckbox />
              <FavoriteCheck />
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>New Content Page</h3>
            <BsFillFolderFill className='text-gray-500' />
          </div>

          <div className='task flex gap-3 items-center'>
            <CustomCheckbox />
              <FavoriteCheck />
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>New Content Page</h3>
            <BsFillFolderFill className='text-gray-500' />
          </div>

          <div className='task flex gap-3 items-center'>
            <CustomCheckbox />
              <FavoriteCheck />
              <h3 className='mr-auto text-xs text-gray-300 font-medium'>New Content Page</h3>
            <BsFillFolderFill className='text-gray-500' />
          </div>

          {newTasksOverlay &&
            <div onClick={() => setNewTasksOverlay(false)} className='new-task bg-[linear-gradient(to_bottom,_#0000,20%,_#191D1E)] absolute w-full h-[120px] top-5 flex items-end justify-center gap-2 text-xs p-1 cursor-pointer'>
            <button className='top-5 flex items-center justify-center gap-2'>
              <div className='bg-[#FF754C] rounded-xl h-6 w-6 text-xs font-semibold text-white flex items-center justify-center'>2</div>
              <h3 className='font-medium'>New tasks</h3>
              <IoIosArrowDown color='yellow'/>
            </button>
          </div>}
        </div>


    </div>
  )
}

export default ConversationDetails