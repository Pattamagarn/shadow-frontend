import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import MetaHeader from '../../components/meta-header/MetaHeader'
import Navigation from '../../components/navbar/Navigation';

const TopUp = () => {

    const [aysel,setAysel] = useState('')

    return (
        <div className='container'>
            <MetaHeader title={`หน้าเติมเงิน`} />
            <Navigation />
            <div className="flex flex-col mt-10  w-screen">
                <div className="flex flex-row">
                    <div className="text text-3xl mx-44 text-primary">เติม Aysel</div>
                </div>

                <hr className="w-9.5/12 mx-44 h-2 my-5 border-10 bg-primary" />
            </div>
            <div className='grid place-items-center text text-error '>***อัตราการแลกเปลี่ยนปัจจุบัน 1 บาท = 2 บาท***</div>
            <div className='flex flex-row place-content-center justify-evenly py-10'>
                <input type="text" placeholder="จำนวนเงิน THB" className="input w-full max-w-xs bg-neutral" />
                <Icon icon={"ic:outline-double-arrow"} className='text-accent' width={48} height={48} />
                <input type="text" placeholder="จำนวน Aysel" className="input w-full max-w-xs bg-neutral" />
            </div>
            <div className="flex flex-col mt-10   w-screen">
                <div className="flex flex-row">
                    <div className="text text-3xl mx-44 text-primary">วิธีชำระเงิน</div>
                </div>

                <hr className="w-9.5/12 mx-44 h-2 my-5 border-10 bg-primary" />
            </div>

            <div className='grid flex-col place-content-center py-10 w-screen'>
                <input type="text" placeholder="กรุณากรอก URL" className="input w-5/12 bg-neutral" />
                <button>ยืนยัน</button>
            </div>
        </div>
    )


}

export default TopUp;