import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';
import MetaHeader from '../../components/meta-header/MetaHeader';
import Swal from 'sweetalert2'
import TitleBox from '../../components/title-box/TitleBox';
import { Icon } from '@iconify/react'
import axios from 'axios';

const UpdateMyProfile = () => {

    const [account, setAccount] = useState([])
    const [newpass,setNewpass] = useState('')
    const [hide, setHide] = useState(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, { withCredentials: true })
            .then((response) => {
                console.log(response.data.payload)
                setAccount(response.data.payload)


            })
            .catch((error) => { })
        axios.patch(`${process.env.REACT_APP_API}/edit-account`, { withCredentials: true })
        .then((response) => {

        })
        .catch((error) => {})
    })

    const alertSuccess = (payload) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: payload,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        setAccount({email:'', password:''})
    }

    const alertError = (payload) => {
        Swal.fire({
            title: 'ล้มเหลว',
            text: payload,
            icon: 'error',
            confirmButtonText: 'ตกลง'
        })
    }

    const alertWarning = (payload) => {
        Swal.fire({
            title: 'คำเตือน',
            text: payload,
            icon: 'warning',
            confirmButtonText: 'ตกลง'
        })
    }

    const handleEditAccount = (event) => {
        event.preventDefault()
        (account, alertSuccess, alertError, alertWarning)
    }


    return (
        <div container mx-auto>
            <MetaHeader title='แก้ไขโปรไฟล์ของฉัน' />
            <Navigation />
            <TitleBox text='แก้ไขโปรไฟล์' />
            <div className='flex flex-row place-content-center justify-evenly w-auto mt-20'>
                <div className='grid gap-4'>
                    <input placeholder='email' value={account.email} className='input bg-neutral'/>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.username} placeholder='รหัสผ่าน'/>
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.password} type={hide ? 'password' : 'text'} placeholder='รหัสผ่าน'/>
                        <Icon icon={hide ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide(!hide)}/>
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.password} type={hide ? 'password' : 'text'} placeholder='รหัสผ่าน'/>
                        <Icon icon={hide ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide(!hide)}/>
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input value={account.password} type={hide ? 'password' : 'text'} placeholder='รหัสผ่าน'/>
                        <Icon icon={hide ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide(!hide)}/>
                    </label>
                    
                </div>
                <div>
                    <img src={`${process.env.REACT_APP_ASSET}${account.avatar}`} alt='profile picture' width={256} height={256} className='image rounded-full'></img>
                </div>
                
            </div>
            <div className='flex place-content-center gap-16 mt-10 mb-10'>
                    <button className='btn btn-success w-60 rounded-3xl' type='submit'>บันทึก</button>
                    <Link to='/my-profile'><button className='btn btn-error w-60 rounded-3xl'>ยกเลิก</button></Link>
            </div>
        </div>
    )
}

export default UpdateMyProfile;