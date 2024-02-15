import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

const NavbarAdmin = () => {
    return (
        <div>
            <div className="navbar bg-primary justify-evenly px-10 py-5">
                <div className="flex-1">
                    <Link to='/'><a className="btn btn-ghost text-xl text-white">SHADOW</a></Link>
                </div>
                <div className='gap-2'>
                    <Link><a className='btn bg-accent text-m px-10'>วิเคราะห์ข้อมูล</a></Link>
                    <Link to='/general-management'><a className='btn bg-accent text-m px-10'>จัดการทั่วไป</a></Link>
                    <Link ><a className='btn bg-accent text-m px-10'>จัดการบัญชีผู้ใช้</a></Link>
                    <Link to='/product-management'><a className='btn bg-accent text-m px-10'>จัดการสินค้า</a></Link>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn border-none px-3 bg-primary text-white'> <RiAccountCircleLine size='40px' /> my profile</div>
                        <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 border-none bg-info text-primary rounded-box w-full'>
                            <Link to='/my-profile'><li><a>โปรไฟล์ของฉัน</a></li></Link>
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