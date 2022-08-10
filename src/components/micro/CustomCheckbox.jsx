import { useState } from 'react'
import { BsCheck2 } from 'react-icons/bs'

const CustomCheckbox = ({ checked = false, onChange = () => {}, className, ...props}) => {
    const [isChecked, setIsChecked] = useState(checked)
  return (
    <div className={`custom-checkbox w-[16px] h-[16px] cursor-pointer rounded-md border overflow-hidden flex justify-center items-center ${isChecked ? 'border-blue-400 bg-blue-400' : 'border-gray-500'}`}>
        <label className={`${isChecked ? 'bg-blue-400 ': ''}w-[22px] h-[22px] cursor-pointer text-white flex justify-center items-center rounded-md`}>
        <input type="checkbox" { ...props } onChange={evt => { setIsChecked(!isChecked); onChange(evt) }} className={className + " hidden"} />
            {isChecked && <BsCheck2 size={12} />}
        </label>
    </div>
  )
}

export default CustomCheckbox