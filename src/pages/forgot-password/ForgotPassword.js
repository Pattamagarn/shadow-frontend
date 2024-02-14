import { Link, useNavigate } from 'react-router-dom'
import MetaHeader from '../../components/meta-header/MetaHeader'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import Swal from 'sweetalert2'

const SignIn = () => {
    const [account, setAccount] = useState({email:''})

    const setEmail = (email) => {
        setAccount({...account, email:email.target.value})
    }

    return(
        <>
        <MetaHeader title={`กู้คืนรหัสผ่าน`} />
        <div className='container mx-auto w-full h-full flex justify-center'>
            <form className={`p-10 rounded bg-[#33007B]`}>
                <div className='flex justify-center align-middle'>
                <Icon icon={"game-icons:minerals"} className='text-[#F000B8]' width={48} height={48} />
                <h4 className='text-5xl text-center text-[#FFFFFF]'>SHADOW</h4>
                </div>
                <h4 className='text-3xl text-center text-[#FFFFFF] mt-5'>ลืมรหัสผ่านหรือเปล่า?</h4>
                <div className='form-control w-full max-w-xs mt-5'>
                    <input value={account.email} type={'text'} placeholder='อีเมล' className='input w-full max-w-xs bg-[#CACACA] text-[#000000]' onChange={setEmail}/>
                </div>
                <div className='flex flex-col w-full border-opacity-50'>
                    <button className="btn bg-[#3FC3EE] hover:bg-[#46a5c4] text-[#FFFFFF] w-full mt-5">ยืนยันอีเมล</button>
                    <Link to='/' className="btn bg-[#F27474] hover:bg-[#ca6161] text-[#FFFFFF] w-full mt-5">
                        กลับสู่หน้าหลัก
                    </Link>
                </div>
            </form>
        </div>
        </>
    )
}

export default SignIn