import React from 'react';
import { RiAccountCircleLine } from "react-icons/ri";

const NavbarGuest = () => {
    return (
        <div>
            <div className="navbar bg-primary justify-evenly px-10 py-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-white">SHADOW</a>
                </div>
                <div className='gap-2'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn m-1 bg-accent px-10'>หมวดหมู่สินค้า</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full'>
                            <li><a>สินค้าทั้งหมด</a></li>
                            <li><a>สินค้าโปรโมชั่น</a></li>
                            <li><a>สินค้าประมูล</a></li>
                            <li><a>สินค้าสุ่มกาชา</a></li>
                        </ul>
                    </div>
                    <a className='btn bg-accent text-m px-10'>เติม Aysel</a>
                    <a className='btn bg-accent text-m px-10'>เข้าสู่ระบบ</a>
                    <a className='btn bg-accent text-m px-10'>สมัครสมาชิก</a>
                </div>
            </div>
            <br />
        </div>
    )
}

export default NavbarGuest;