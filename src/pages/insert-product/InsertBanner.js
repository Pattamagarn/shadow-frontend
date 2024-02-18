import React from "react";
import { Link,useNavigate } from "react-router-dom";
import MetaHeader from "../../components/meta-header/MetaHeader";
import Navigation from "../../components/navbar/Navigation";
import Swal from 'sweetalert2'

const InsertBanner = () => {

    const navigate = useNavigate()

    const confirmInsert = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
          })
          navigate('/general-management')
    }

    return (
        <div>
            <MetaHeader title={`เพิ่มแบนเนอร์`} />
            <Navigation />
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">เพิ่มแบนเนอร์</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>

            <div className="flex flex-row mt-5 mx-44 justify-evenly"> 
                <div className="text text-3xl">ลิงก์ภาพ</div>
                <input type="file" className="file-input w-6/12 bg-neutral " />
                <button className="btn btn-success w-max" onClick={() => confirmInsert('เพิ่มแบนเนอร์สำเร็จ')}>ยืนยันการเพิ่มแบนเนอร์</button>
                <Link to='/general-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มแบนเนอร์</button></Link>
            </div>

        </div>
    )
}

export default InsertBanner;