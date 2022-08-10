import { useState } from 'react'

import { IoPaperPlane } from "react-icons/io5";
import bg from '../assets/images/login-bg.jpg'
import dl from '../assets/images/dl.svg'
// import useStore from '../store';

const LoginScreen = () => {
    // const setLoading = useStore(state => state.setLoading)
    // const setLoggedIn = useStore(state => state.setLoggedIn)
    const [usernameEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='login_screen w-screen h-screen fixed top-0 left-0 text-white z-10 py-5 px-[10%] flex flex-col' style={{ backgroundImage: `linear-gradient(to right, #181a1c, #181a1cf0), url(${bg})`, backgroundSize: 'cover' }}>
        <div className='logo text-2xl flex items-center gap-3 cursor-pointer'>
            <div className="icon relative w-12 h-12 flex rounded-full">
                <div className="w-12 h-6 top-0 left-0 rounded-full absolute bg-blue-600 animate-spin"></div>
                <div className="inner m-auto relative w-10 h-10 rounded-full bg-blue-900"></div>
            </div>
            <div className="txt flex flex-col leading-none">
                <span className='font-bold m-0 p-0 text-gray-500'>Reaction</span>
                <span className='text-xs m-0 p-0'>Chat</span>
            </div>
        </div>

        <div className="login my-auto">
            <h1 className='text-5xl text-gray-400'>Login</h1>
            <p className='text-sm text-gray-500 py-4'>Enter the details below</p>
            
            <div className="input-block max-w-[350px] w-full h-[55px] bg-[#232528] rounded-lg relative mb-5">
                <label htmlFor="usernameEmail" className='absolute text-gray-600 text-[10px] font-bold top-2 left-3'>Username/Email</label>
                <input type="text" placeholder='Enter username or email' className='rounded-lg w-full h-full px-3 bg-transparent outline-none text-sm pt-[12px] transition-all focus:border-2 focus:border-[#264b70]' value={usernameEmail} onChange={evt => setUsernameEmail(evt.target.value)} />
            </div>
            
            <div className="input-block max-w-[350px] w-full h-[55px] bg-[#232528] rounded-lg relative mb-10">
                <label htmlFor="usernameEmail" className='absolute text-gray-600 text-[10px] font-bold top-2 left-3'>Password</label>
                <input type="password" placeholder='Enter Password' className='rounded-lg w-full h-full px-3 bg-transparent outline-none text-sm pt-[12px] transition-all focus:border-2 focus:border-[#264b70]' value={password} onChange={evt => setPassword(evt.target.value)} />
            </div>

            <button className='max-w-[350px] w-full h-[55px] bg-[#264b70] disabled:bg-[#232528] disabled:text-[#5c6167] disabled:transition-none disabled:active:scale-100 rounded-lg flex justify-center items-center gap-3 hover:bg-[#276baf] transition-all active:scale-95' disabled={(!usernameEmail.trim() || !password.trim())}>
                <span>Continue</span>
                <IoPaperPlane />
            </button>
        </div>

        <img src={dl} alt="" className='absolute lg:hidden rotate-90 h-[60%] lg:top-[160px] lg:left-[20%] left-[45%] -top-10' />
    </div>
  )
}

export default LoginScreen