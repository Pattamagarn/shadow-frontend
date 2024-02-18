import React,{ useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import axios from 'axios';

const NavbarAdmin = () => {

    const [data,setData] = useState([])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`,{withCredentials: true} )
        .then((response) => {
            setData(response.data.payload)
            // console.log(response.data.payload)
            
        })
        .catch((error) => {})
    },[])

    return (
        <div>
            <div className="navbar bg-primary justify-evenly px-10 py-5">
                <div className="flex-1">
                    <Link to='/'><a className="btn btn-ghost text-xl text-white hover:bg-[#d7ab43]">SHADOW</a></Link>
                </div>
                <div className='gap-2'>
                    <Link to='/analysis'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>วิเคราะห์ข้อมูล</a></Link>
                    <Link to='/general-management'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>จัดการทั่วไป</a></Link>
                    <Link to='/member-management'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>จัดการบัญชีผู้ใช้</a></Link>
                    <Link to='/product-management'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>จัดการสินค้า</a></Link>
                    <div className='dropdown'>
                    <div tabIndex={0} role='button' className='btn border-none px-3 w-32 bg-primary text-white hover:bg-primary'> <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} width={32} height={32} className='rounded-box'/>{data.username}</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full hover:bg-[#d7ab43]'>
                            <Link><li><a>โปรไฟล์ของฉัน</a></li></Link>
                            <Link><li><a>ออกจากระบบ</a></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default NavbarAdmin;