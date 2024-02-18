import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import MetaHeader from '../../components/meta-header/MetaHeader'
import Navigation from '../../components/navbar/Navigation';
import Swal from 'sweetalert2'

const TopUp = () => {

    const [aysel,setAysel] = useState('')
    const [baht,setBaht] = useState('')

    // const convertCurrency = (text) => {
    //     setAysel(text*2)
    //     console.log(`${aysel}`)
        

    // }
    const confirmTopUp = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
          })
    }

    return (
        <div className='container'>
            <MetaHeader title={`หน้าเติมเงิน`} />
            <Navigation />
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">เติม Aysel</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
        
            <div className='grid place-items-center text text-error '>***อัตราการแลกเปลี่ยนปัจจุบัน 1 บาท = 2 บาท***</div>
            <div className='flex flex-row place-content-center justify-evenly py-10'>
                <input name='baht' type="text" placeholder="จำนวนเงิน THB" onChange={setBaht} className="input w-full max-w-xs bg-neutral" />
                <Icon icon={"ic:outline-double-arrow"} className='text-accent' width={48} height={48} />
                <input name='aysel' type="text" placeholder="จำนวน Aysel" onChange={setAysel} className="input w-full max-w-xs bg-neutral" />
            </div>
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">วิธีชำระเงิน</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>

            <div className='grid flex-col place-items-center mx-96 mt-10 py-10'>
                <input type="text" placeholder="กรุณากรอก URL" className="input w-full bg-neutral" />
                <Link to='/transaction' className='link text-accent hover:text-[#b19243] grid place-self-end'>ติดตามสถานะการเติมเงิน</Link>
                <button className='btn btn-success w-max mt-5 text-[#ffffff] rounded-box' onClick={() => confirmTopUp('เติมเงินสำเร็จ')}>ยืนยัน</button>
            </div>
        </div>
    )


}

export default TopUp;