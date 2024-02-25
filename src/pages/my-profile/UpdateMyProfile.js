import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';
import MetaHeader from '../../components/meta-header/MetaHeader';
import Swal from 'sweetalert2'
import TitleBox from '../../components/title-box/TitleBox';
import { Icon } from '@iconify/react'
import axios from 'axios';
import { editAccount } from '../../service/authentication';

const UpdateMyProfile = () => {

    const navigate = useNavigate()
    const [account, setAccount] = useState([])
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState({ oldPass: '', newPass: '', confirmPass: '' })
    const [hide1, setHide1] = useState(true)
    const [hide2, setHide2] = useState(true)
    const [hide3, setHide3] = useState(true)


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, { withCredentials: true })
        .then((response) => {
            // console.log(response.data.payload)
            setAccount(response.data.payload)


        })
        .catch((error) => { })
        // axios.patch(`${process.env.REACT_APP_API}/`, { withCredentials: true })
    })


    const setOldPass = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            oldPass: text
        }))
    }

    const setNewPass = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            newPass: text
        }))
    }
    const setConfirmPass = (text) => {
        setPassword(oldValue => ({
            ...oldValue,
            confirmPass: text
        }))
    }
    const alertSuccess = (payload) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: payload,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        setAccount({ email: '', password: '' })
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
        console.log('here')
        navigate('/my-profile')
        // editAccount(account.email,password.oldPass,password.newPass, alertSuccess, alertError, alertWarning)
    }

    const handleEditUsername = (event) => {
        setUsername(event.target.value)
    }


    return (
        <div container mx-auto>
            <MetaHeader title='แก้ไขโปรไฟล์ของฉัน' />
            <Navigation />
            <TitleBox text='แก้ไขโปรไฟล์' />
            <div className='flex flex-row place-content-center justify-evenly w-auto mt-20'>
                <div className='grid gap-4'>
                    <input placeholder='email' value={account.email} className='input bg-neutral' />
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input value={username ? username : account.username} placeholder='ชื่อผู้ใช้'  onChange={handleEditUsername}/>
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input type={hide1 ? 'password' : 'text'} placeholder='รหัสผ่านเก่า' onChange={setOldPass}/>
                        <Icon icon={hide1 ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide1(!hide1)} />
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input type={hide2 ? 'password' : 'text'} placeholder='รหัสผ่านใหม่' onChange={setNewPass} />
                        <Icon icon={hide2 ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide2(!hide2)} />
                    </label>
                    <label className='input w-full max-w-xs bg-neutral text-[#000000] flex justify-between items-center gap-2'>
                        <input type={hide3 ? 'password' : 'text'} placeholder='ยืนยันรหัสผ่านใหม่'  onChange={setConfirmPass}/>
                        <Icon icon={hide3 ? "mdi:hide" : "mdi:show"} className='text-[#000000]' width={24} height={24} onClick={() => setHide3(!hide3)} />
                    </label>

                </div>
                <div onClick={() => console.log('imagepicku')}>
                    <button><img src={`${process.env.REACT_APP_ASSET}${account.avatar}`} alt='profile picture' width={256} height={256} className='image rounded-full'></img></button>
                </div>

            </div>
            <div className='flex place-content-center gap-16 mt-10 mb-10'>
                <button className='btn btn-success w-60 rounded-3xl' onClick={handleEditAccount} >บันทึก</button>
                <Link to='/my-profile'><button className='btn btn-error w-60 rounded-3xl'>ยกเลิก</button></Link>
            </div>
        </div>
    )
}

export default UpdateMyProfile;