import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { Icon } from '@iconify/react'
import axios from 'axios';

const NavbarMember = () => {

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
                    <a className="btn btn-ghost text-xl text-white">SHADOW</a>
                </div>
                <div className='gap-2'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn m-1 bg-accent px-10 hover:bg-[#d7ab43]'>หมวดหมู่สินค้า</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full'>
                            <Link to='/general-product'><li><a>สินค้าทั้งหมด</a></li></Link>
                            <Link to='/sale-product'><li><a>สินค้าโปรโมชั่น</a></li></Link>
                            <Link to='/auction-product'><li><a>สินค้าประมูล</a></li></Link>
                            <Link to='/gacha-product'><li><a>สินค้าสุ่มกาชา</a></li></Link>
                        </ul>
                    </div>
                    <Link to='/top-up'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>เติม Aysel</a></Link>
                    <div className='flex flex-row px-5'>
                        <Link to='/top-up'><a className='textArea bg-primary text-m text-white'>99999</a></Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 512 512"><path fill="skyblue" d="m263.396 491.136l-21.303-131.13l-13.116 127.847l-44.258-24.593l49.024-168.947l41.122 67.33l19.665 91.792l-31.134 37.7zm-153.69-3.88l-7.82-27.853l-27.776-9.022l27.838-7.826l9.02-27.784l7.83 27.845l27.783 9.03l-27.844 7.82l-9.03 27.79zm60.94-55.476l-28.97-2.242l-64.16-105.39l-4.148-82.91l78.463 30.34l51.1 67.966l-16.398 62.952l-63.105-83.046l47.22 112.33zm145.663-28.756l-17.02-2.127l-8.508-43.624l-14.28-26.774l91.794-91.793l31.15 9.825l-13.115 73.764l-70.02 80.728zm18.348-41.894l27.27-32.52l9.98-40.923l-25.183 32.52zM209.74 322.725l-38.527-51.62l22.13-109.025l77.046-95.052l63.105 85.227l-6.55 105.735l-59.012 60.64l-37.7-57.373zm47.32-47.25l27.18-94.6l24.738-22.858l-28.03 3.85l-11.132-43.28l-6.558 43.28l-45.345 5.516l45.108 16.17l-5.96 91.92zm-97.248-19.727l-27.876-44.267l9.84-93.413l31.143 62.286l-13.108 75.395zm232.258-22.46l-9.87-35.175l-35.077-11.393l35.153-9.887l11.393-35.076l9.886 35.16l35.076 11.402l-35.153 9.87l-11.41 35.1zm-213.9-97.943l-12.344-43.99l-43.876-14.25l43.976-12.365l14.247-43.876L192.54 64.84l43.867 14.263l-43.968 12.35l-14.27 43.892z"/></svg>
                    </div>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn border-none px-3 w-32 bg-primary text-white hover:bg-primary'> <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} width={32} height={32} className='rounded-box'/>{data.username}</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full'>
                            <Link to='/my-profile'><li><a>โปรไฟล์ของฉัน</a></li></Link>
                            <Link to='/my-store'><li><a>คลังสินค้าของฉัน</a></li></Link>
                            <Link to='/transaction'><li><a>ธุรกรรมของฉัน</a></li></Link>
                            <Link><li><a>ออกจากระบบ</a></li></Link>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default NavbarMember;