import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import TitleBox from "../../../components/title-box/TitleBox";
import Swal from "sweetalert2";

const UpdatePaymentMethodInfo = () => {

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
            <MetaHeader title={`เปลี่ยนภาพวิธีการชำระเงิน`} />
            <Navigation />
            <TitleBox text='เปลี่ยนภาพวิธีการชำระเงิน'/>
            <div className="flex flex-row mt-5 mx-44 justify-evenly"> 
                <div className="text text-3xl">ลิงก์ภาพ</div>
                <input type="file" className="file-input w-6/12 bg-neutral " />
                <button className="btn btn-success w-max" onClick={() => confirmUpdate('เปลี่ยนแปลงสำเร็จ')}>ยืนยันการเปลี่ยนแปลง</button>
                <Link to='/general-management'><button className="btn btn-error w-max">ยกเลิกการเปลี่ยนแปลง</button></Link>
            </div>
        </div>
    )
}

export default UpdatePaymentMethodInfo;