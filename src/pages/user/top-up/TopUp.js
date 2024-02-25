import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import MetaHeader from '../../../components/meta-header/MetaHeader'
import Navigation from '../../../components/navbar/Navigation';
import TitleBox from '../../../components/title-box/TitleBox';
import Swal from 'sweetalert2'
import axios from 'axios'

const TopUp = () => {

    const navigate = useNavigate()
    const [aysel, setAysel] = useState('')
    const [baht, setBaht] = useState('')
    // const [data, setData] = useState([])
    const [payment,setPayment] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/payment-method-select`)
        .then((response) => {
            if (response.data.status) {
                setPayment(response.data.payload)
                // console.log(payment.information)
            }
        })
    }, [])

    const convertCurrency = (opt, text) => {
        if (opt === 1) {
            if((text.target.value < 0) || (text.target.value === ''))
            {
                setAysel()
                setBaht()
            }
            else{
                setBaht(text.target.value)
                setAysel((text.target.value) * 2)
            }
            
        }
        else {
            if((text.target.value < 0) || (text.target.value === ''))
            {
                setAysel()
                setBaht()
            }
            else{
                setBaht((text.target.value) / 2)
                setAysel(text.target.value)
            }
            
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
        <div className='container mb-10'>
            <MetaHeader title={`หน้าเติมเงิน`} />
            <Navigation />
            <TitleBox text="เติม Aysel" />

            <div className='grid place-items-center text text-error '>***อัตราการแลกเปลี่ยนปัจจุบัน 1 บาท = 2 Aysel***</div>
            <form className='flex flex-row place-content-center justify-evenly py-10'>
                <input value={baht} type="text" placeholder="จำนวนเงิน THB" onChange={(text) => convertCurrency(1, text)} className="input w-full max-w-xs bg-neutral" />
                <Icon icon={"ic:outline-double-arrow"} className='text-accent' width={48} height={48} />
                <input value={aysel} type="text" placeholder="จำนวน Aysel" onChange={(text) => convertCurrency(2, text)} className="input w-full max-w-xs bg-neutral" />
            </form>
            <TitleBox text="วิธีชำระเงิน" />

            <div className='grid flex-col place-items-center mx-96 mt-10 py-10'>
                <input type="text" placeholder="กรุณากรอก URL" className="input w-full bg-neutral" />
                <Link to='/transaction' className='link text-accent hover:text-[#b19243] grid place-self-end'>ติดตามสถานะการเติมเงิน</Link>
                <Link to='/my-store'><button className='btn btn-success w-max mt-5 text-[#ffffff] rounded-box' onClick={() => confirmTopUp('เติมเงินสำเร็จ')}>ยืนยัน</button></Link>
            </div>

            <div className='flex flex-row place-content-center justify-around'>
                <div className='btn btn-info w-3/12 h-64 text-2xl' onClick={() => document.getElementById('modal').showModal()}>
                    ภาพวิธีการชำระเงิน
                </div>
                <dialog id="modal" className='modal'>
                    <div className='modal-box w-svh max-w-5xl'>
                        <div className='grid place-content-center'>
                            <div className='text text-2xl mb-7'>ภาพวิธีการชำระเงิน</div>
                            <img src={`http://localhost:3001/asset/payment-method/payment-method.png`} alt='payment-method-info' width={850} height={250} />
                            {/* <img src={`http://localhost:3001/asset/payment-method/${payment.information}`} alt='payment-method-info' width={850} height={250} /> */}

                        </div>
                        <div className='modal-action'>
                            <form method='dialog'>
                                <button className='btn'>กลับ</button>
                            </form>
                        </div>
                    </div>
                </dialog>


                <div className='btn btn-info w-3/12 h-64 text-2xl' onClick={() => document.getElementById('modal-1').showModal()}>
                    วิดีโอวิธีการชำระเงิน
                </div>

                <dialog id="modal-1" className='modal'>
                    <div className='modal-box w-svh max-w-5xl'>
                        <div className='grid place-content-center'>
                            <div className='text text-2xl mb-6'>วิดีโอวิธีการชำระเงิน</div>
                            <iframe src='https://www.youtube.com/embed/smdmEhkIRVc?si=mq3E5TZNz1Qi352p' title="payment-method-video" width="660" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            {/* <iframe src={`${payment.information}`} title="payment-method-video" width="660" height="400" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </div>
                        <div className='modal-action'>
                            <form method='dialog'>
                                <button className='btn'>กลับ</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )


}

export default TopUp;