import { Link, useNavigate } from 'react-router-dom'
import MetaHeader from '../../components/meta-header/MetaHeader'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`, {withCredentials: true})
        .then((response) => {
            if(!response.data.status){
                 navigate('/sign-in')
            }
        })
    }, [])

    const alertSuccess = (payload) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: payload,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
    }

    const alertError = (payload) => {
        Swal.fire({
            title: 'ล้มเหลว',
            text: payload,
            icon: 'error',
            confirmButtonText: 'ตกลง'
        })
    }

    const alertWarning = (payload) => {
        Swal.fire({
            title: 'คำเตือน',
            text: payload,
            icon: 'warning',
            confirmButtonText: 'ตกลง'
        })
    }

    return (
        <>
        <MetaHeader title={`หน้าหลัก`} />
        <button className='btn btn-primary'>คลิกฉันสิ</button>
        </>
    )
}

export default Home