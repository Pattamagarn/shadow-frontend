import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import TitleBox from "../../../components/title-box/TitleBox";
import Swal from 'sweetalert2'

const InsertBanner = () => {

    const navigate = useNavigate()
    const [banner,setBanner] = useState({banner:''})

    const confirmInsert = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
          })
          navigate('/general-management')
    }

    const handleInput = (e) => {

        e.persist()
        setBanner({...banner,[e.target.name] : e.target.value})
        console.log(banner)
    }

    return (
        <div>
            <MetaHeader title={`เพิ่มแบนเนอร์`} />
            <Navigation />
            <TitleBox text='เพิ่มแบนเนอร์' />

            <div className="flex flex-row mt-5 mx-44 justify-evenly"> 
                <div className="text text-3xl">ลิงก์ภาพ</div>
                <input type="file" name='image' className="file-input w-6/12 bg-neutral " value={banner.banner} onChange={handleInput}/>
                <button className="btn btn-success w-max" type='submit'  onClick={() => confirmInsert('เพิ่มแบนเนอร์สำเร็จ')}>ยืนยันการเพิ่มแบนเนอร์</button>
                <Link to='/general-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มแบนเนอร์</button></Link>
            </div>

        </div>
    )
}

export default InsertBanner;