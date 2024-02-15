import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";

const NavbarMember = () => {
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
                            <Link to='/general-product'><li><a>สินค้าทั้งหมด</a></li></Link>
                            <Link to='/sale-product'><li><a>สินค้าโปรโมชั่น</a></li></Link>
                            <Link to='/auction-product'><li><a>สินค้าประมูล</a></li></Link>
                            <Link to='/gacha-product'><li><a>สินค้าสุ่มกาชา</a></li></Link>
                        </ul>
                    </div>
                    <a className='btn bg-accent text-m px-10'>เติม Aysel</a>
                    <Link to='/top-up'><a className='textArea bg-primary px-5 text-m text-white'>99999</a></Link>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn border-none px-3 bg-primary text-white'> <RiAccountCircleLine size='40px' /> my profile</div>
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