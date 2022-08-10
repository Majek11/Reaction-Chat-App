import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const FavoriteCheck = ({ checked = false, onChange = () => {}, className, ...props}) => {
    const [isChecked, setIsChecked] = useState(checked)
  return (
    <div className={`custom-checkbox w-[16px] h-[16px] cursor-pointer rounded-md overflow-hidden flex justify-center items-center`}>
        <label className={`w-[22px] h-[22px] cursor-pointer text-white flex justify-center items-center rounded-md`}>
        <input type="checkbox" { ...props } onChange={evt => { setIsChecked(!isChecked); onChange(evt) }} className={className + " hidden"} />
            {!isChecked && <FaRegStar className='text-yellow-500' size={15} />}
            {isChecked && <FaStar className='text-yellow-500' size={15} />}
        </label>
    </div>
  )
}

export default FavoriteCheck