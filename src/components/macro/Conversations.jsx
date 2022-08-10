import { useEffect, useRef } from "react";
import { TbNotes } from "react-icons/tb";
import { AiOutlinePaperClip } from "react-icons/ai";
import { HiOutlineVideoCamera, HiPaperAirplane } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { CgImage } from "react-icons/cg";
import Img from "../../assets/images/IMG_0394.jpg";
import me from '../../assets/images/12345.jpg'
import { RiApps2Line } from "react-icons/ri";
import { BsDot, BsMic } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import useStore from "../../store";

const Conversations = () => {
  const convo = useRef()
  const contactsOpen = useStore(state => state.contactsOpen)
  const chatDetailsOpen = useStore(state => state.chatDetailsOpen)
  const setContactsOpen = useStore(state => state.setContactsOpen)
  const setChatDetailsOpen = useStore(state => state.setChatDetailsOpen)

  useEffect(() => {
    if (!convo.current) return
    const timeId = setInterval(() => {
      convo.current.scrollTo(0, 500)
    }, 1000);
  
    return () => {
      clearInterval(timeId)
    }
  }, [])

  return (
    <div className="conversations text-white grid grid-rows-[auto_1fr_auto] flex-1 w-full overflow-auto scroll-smooth no-bar" ref={convo}>
      {/* Conversations */}
      <nav className="flex justify-between h-[70px] items-center p-8 sticky top-0 bg-[linear-gradient(to_bottom,_#161719,70%,_#161719ee)] shadow-xl shadow-[#161719ee] z-10">
        <div className="flex gap-4 items-center">
          <button className="text-gray-400" onClick={() => setContactsOpen(!contactsOpen)}>
            <RiApps2Line size={22} />
          </button>
          <div className="flex gap-2 text-[18px] items-center font-medium">
            <div>Chat</div>
            <div className="text-[15px] font-normal text-gray-400">{24}</div>
          </div>
        </div>
        <div className="flex gap-6 text-gray-500">
          <button>
            <HiOutlineVideoCamera size={24} />
          </button>
          <button>
            <FiPhoneCall size={20} />
          </button>
          <button className="hidden md:inline-block">
            <CgImage size={20} />
          </button>
          <button className="hidden md:inline-block">
            <TbNotes size={21} />
          </button>
        </div>

        <div className="flex gap-2 bg-[#1f2022] p-1 px-2 rounded-full cursor-pointer" onClick={() => setChatDetailsOpen(!chatDetailsOpen)}>
          <figure className="h-[24px] w-[24px] bg-white rounded-full overflow-hidden">
            <img src={me} alt="" />
          </figure>
          <figure className="h-[24px] w-[24px] bg-white rounded-full overflow-hidden hidden md:block">
            <img src={Img} alt="" />
          </figure>
          <figure className="h-[24px] w-[24px] bg-[#2b2e30] text-[10px] flex justify-center items-center rounded-full overflow-hidden">
            6+
          </figure>
        </div>
      </nav>

      <div className="px-14 md:px-16 py-3 flex flex-col gap-4 text-xs">
        <p className="flex justify-center bg-[#1f2022] p-1 px-2 rounded-full self-center border border-gray-800 text-gray-400 text-[11px]">Fri 29 Jul 2:42pm</p>
        <div className="flex flex-col items-end relative gap-2">
          <div>
            <span> You</span>
            <span className="text-gray-500"> 2:00pm</span>
            <figure className="h-[32px] w-[32px] bg-[#161719] rounded-full absolute -right-10 -top-[3px]">
              <img src={me} alt="" className="rounded-full" />
            </figure>
          </div>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full rounded-tr-none">
            My baby ❤️
          </p>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full">
            Send me some jpegs naw 😢
          </p>
        </div>

        <div className="flex flex-col items-start relative gap-2">
          <div>
            <span>Fine Babe</span>
            <span className="text-gray-500"> 2:02pm</span>
            <figure className="h-[32px] w-[32px] bg-white rounded-full absolute -left-10 -top-[3px] overflow-hidden">
              <img src={Img} alt="" />
            </figure>
          </div>
          <p className="bg-[#2c3436] py-2 px-4 rounded-full rounded-tl-none">
            Okay sweetie
          </p>
          <div className="img-group grid grid-cols-2 gap-2">
            <figure className="max-w-[200px] bg-white rounded-lg overflow-hidden">
              <img src={Img} alt="" />
            </figure>
            <figure className="max-w-[200px] bg-white rounded-lg overflow-hidden">
              <img src={Img} alt="" />
            </figure>
          </div>
        </div>

        <div className="flex flex-col items-end relative gap-2">
          <div>
            <span> You</span>
            <span className="text-gray-500"> 2:05pm</span>
            <figure className="h-[32px] w-[32px] bg-[#161719] rounded-full absolute -right-10 -top-[3px]">
              <img src={me} alt="" className="rounded-full" />
            </figure>
          </div>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full rounded-tr-none">
            Soo Pretty! I'm in love 😍
          </p>
          <p className="bg-[#43A0FF] py-2 px-4 rounded-full">
            Why did you send it twice, though? 😂
          </p>
        </div>

        <div className="flex flex-col items-start relative gap-2">
          <div>
            <span>Fine Babe</span>
            <span className="text-gray-500"> 2:06pm</span>
            <figure className="h-[32px] w-[32px] bg-white rounded-full absolute -left-10 -top-[3px] overflow-hidden">
              <img src={Img} alt="" />
            </figure>
          </div>
          <p className="bg-[#2c3436] py-2 px-4 rounded-full rounded-tl-none">
            So that you see only me. Just want you to be mine, baby.
          </p>
        </div>
        
        <div className="flex flex-row items-start relative">
          <div>
            <FaPen className="absolute -left-10 top-[1px] text-yellow-400" />
            <figure className="h-[20px] w-[20px] bg-white rounded-full absolute -left-4 -top-[3px] overflow-hidden">
              <img src={Img} alt="" />
            </figure>
          </div>
          <p className="rounded-full rounded-tl-none px-4 text-gray-400">
            <span className="text-yellow-400">Fine Babe </span> is typing...
          </p>
        </div>
      </div>

      <footer className="flex gap-4 bg-[#161719] h-16 items-center px-5 sticky bottom-0">
        <div className="send-msg flex w-full bg-[#23292b] h-10 rounded-md p-3 py-2 gap-2">
          <figure className="h-[25px] w-[25px] bg-white rounded-full flex flex-shrink-0 overflow-hidden
          ">
            <img src={me} alt="" />
          </figure>
          <input
            type="text"
            placeholder="Your Message"
            className="outline-none bg-transparent text-xs text-gray-400 flex w-full"
          />

          <div className="flex gap-2 items-center whitespace-nowrap bg-[#333b3d] px-2 cursor-pointer rounded-full">
            <TbNotes className="text-yellow-500" />
            <p className="text-[11px] text-gray-300 hidden md:block">1 unsaved draft</p>
          </div>
          <BsDot className="self-center text-gray-500" size={28} />
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center p-[1px] text-gray-400">
              <BsMic size={17} />
            </button>
            <button className="flex items-center justify-center p-[1px] text-gray-400">
              <AiOutlinePaperClip size={20} />
            </button>
            <button className="flex items-center justify-center p-[1px]">
              <HiPaperAirplane className="rotate-45" size={19} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Conversations;
