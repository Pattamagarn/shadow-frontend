import React from 'react';
import { RiAccountCircleLine } from "react-icons/ri";

const NavbarAdmin = () => {
    return (
        <div>
            <div className="navbar bg-primary justify-evenly px-10 py-5">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-white">SHADOW</a>
                </div>
                <div className='gap-2'>
                    <a className='btn bg-accent text-m px-10'>วิเคราะห์ข้อมูล</a>
                    <a className='btn bg-accent text-m px-10'>จัดการทั่วไป</a>
                    <a className='btn bg-accent text-m px-10'>จัดการบัญชีผูิ้ใช้</a>
                    <a className='btn bg-accent text-m px-10'>จัดการสินค้า</a>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn border-none px-3 bg-primary text-white'> <RiAccountCircleLine size='40px' /> my profile</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full'>
                            <li><a>โปรไฟล์ของฉัน</a></li>
                            <li><a>ออกจากระบบ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default NavbarAdmin;