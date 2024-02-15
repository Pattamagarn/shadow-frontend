import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

const NavbarGuest = () => {
    return (
        <div>
            <div className="navbar bg-primary justify-evenly px-10 py-5">
                <div className="flex-1">
                <Link to='/'><a className="btn btn-ghost text-xl text-white">SHADOW</a></Link>
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
                    <Link><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>เติม Aysel</a></Link>
                    <Link to='/sign-in' className=' text-[#3FC3EE] hover:text-[#46a5c4] flex'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>เข้าสู่ระบบ</a></Link>
                    <Link to='/sign-up' className=' text-[#3FC3EE] hover:text-[#46a5c4] flex'><a className='btn bg-accent text-m px-10 hover:bg-[#d7ab43]'>สมัครสมาชิก</a></Link>
                </div>
            </div>
            <br />
        </div>
    )
}

export default NavbarGuest;