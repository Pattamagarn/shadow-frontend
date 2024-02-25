import React,{useState,useEffect} from "react";
import { Link,useNavigate} from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import Swal from 'sweetalert2'
import TitleBox from "../../../components/title-box/TitleBox";

const UpdateBanner = () => {

    const navigate = useNavigate()

    const confirmUpdate = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
          })
          navigate('/general-management')
    }
    return (
        <div className="container mx-auto">
            <MetaHeader title={`แก้ไขแบนเนอร์`} />
            <Navigation />
            <TitleBox text='แก้ไขแบนเนอร์' />
            <div className="flex flex-row mt-5 mx-44 justify-evenly"> 
                <div className="text text-3xl">ลิงก์ภาพ</div>
                <input type="file" className="file-input w-6/12 bg-neutral " />
                <button className="btn btn-success w-max" onClick={() => confirmUpdate('แก้ไขแบนเนอร์สำเร็จ')}>ยืนยันการแก้ไขแบนเนอร์</button>
                <Link to='/general-management'><button className="btn btn-error w-max">ยกเลิกการแก้ไขแบนเนอร์</button></Link>
            </div>

        
        </div>
    )
}

export default UpdateBanner;