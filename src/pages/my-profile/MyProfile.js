import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';
import TitleBox from '../../components/title-box/TitleBox';
import MetaHeader from '../../components/meta-header/MetaHeader';
import axios from 'axios';


const MyProfile = () => {

    const [account, setAccount] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, { withCredentials: true })
            .then((response) => {
                console.log(response.data.payload)
                setAccount(response.data.payload)


            })
            .catch((error) => { })
    }
    )
    return (
        <div className='container mx-auto'>
            <MetaHeader title={`โปรไฟล์ของฉัน`} />
            <Navigation />
            <TitleBox text='โปรไฟล์ของฉัน' />
            <div className='flex justify-end px-44'>
                <Link to='/update-my-profile'>
                    <button className='btn btn-outline border-info text-info w-64 rounded-box hover:bg-info hover:border-info'>แก้ไขข้อมูลส่วนตัว</button>
                </Link>
            </div>
            <div className='grid grid-col place-content-center w-auto mt-5 mx-40 mb-10'>
                <img src={`${process.env.REACT_APP_ASSET}${account.avatar}`} alt='profile' width={350} height={350} className='image rounded-full' />
                
            </div>
            <div className='grid gap-4 mt-10 mb-10 place-content-center'>
                    <input placeholder='email' value={account.email} className='input bg-neutral w-96' />
                    <input placeholder='username' value={account.username} className='input bg-neutral w-96 ' />
            </div>

        </div>
    )
}

export default MyProfile;