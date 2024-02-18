import { Link, useNavigate } from 'react-router-dom'
import React, { useState,useEffect } from 'react'
import { Icon } from '@iconify/react'
import MetaHeader from '../../components/meta-header/MetaHeader'
import Navigation from '../../components/navbar/Navigation';
import Swal from 'sweetalert2'
import axios from 'axios'

const TopUp = () => {

    const navigate = useNavigate()
    const [aysel,setAysel] = useState('')
    const [baht,setBaht] = useState('')
    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, {withCredentials: true})
        .then((response) => {
            if(response.data.status){
                setData(response.data.payload)
            }
        })
    }, [])

    const convertCurrency = (opt,text) => {
        if(opt == 1){
            setBaht(text.target.value)
            setAysel((text.target.value)*2)
        }
        else{
            setBaht((text.target.value)/2)
            setAysel(text.target.value)
        }
        
    }
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
        
            <div className='grid place-items-center text text-error '>***อัตราการแลกเปลี่ยนปัจจุบัน 1 บาท = 2 Aysel***</div>
            <form className='flex flex-row place-content-center justify-evenly py-10'>
                <input value={baht} type="text" placeholder="จำนวนเงิน THB" onChange={(text) => convertCurrency(1,text)} className="input w-full max-w-xs bg-neutral" />
                <Icon icon={"ic:outline-double-arrow"} className='text-accent' width={48} height={48} />
                <input value={aysel} type="text" placeholder="จำนวน Aysel" onChange={(text) => convertCurrency(2,text)} className="input w-full max-w-xs bg-neutral" />
            </form>
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

            <div className='flex flex-row place-content-center justify-around'>
                <div className='btn btn-info w-3/12 h-64 text-2xl' onClick={() => document.getElementById('modal').showModal()}>
                    ภาพวิธีการชำระเงิน
                </div>
                <dialog id="modal" className='modal'>
                    <div className='modal-box w-svh max-w-5xl'>
                            <div className='grid grid-rows grid-flow-col gap-2'>
                                <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} alt='picter-1' width={250} height={250}></img>
                                <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} width={250} height={250}></img>
                                <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} width={250} height={250}></img>
                                <img src={`${process.env.REACT_APP_ASSET}${data.avatar}`} width={250} height={250}></img>
                            </div>
                        <div className='modal-action'>
                            <form method='dialog'>
                                <button className='btn'>กลับ</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                <div className='btn btn-info w-3/12 h-64 text-2xl'>
                    วิดีโอวิธีการชำระเงิน
                </div>
            </div>
        </div>
    )


}

export default TopUp;