import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const InputBox = ({label, placeholder, type, eye=false, value, callbackFunction}) => {
    const [hide, setHide] = useState(true)
  return (
    <div className='form-control w-full max-w-md'>
        {eye ? 
        <label className="flex flex-row input-group">
            <input value={value} type={hide ? type : 'text'} placeholder={placeholder} className='input input-bordered w-11/12 mt-5 bg-neutral' onChange={callbackFunction} />
            <span className='bg-primary text-white mt-8' onClick={()=>setHide(!hide)}>{hide ? <AiFillEye size={24}/> : <AiFillEyeInvisible size={24}/>}</span>
        </label>
         : <input value={value} type={type} placeholder={placeholder} className='input input-bordered w-11/12 mt-5 bg-neutral' onChange={callbackFunction} />}
    </div>
  )
}

export default InputBox