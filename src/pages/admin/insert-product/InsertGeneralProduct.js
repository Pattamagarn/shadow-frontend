import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Selection from "../../../components/select/Selection";
import InputProduct from "../../../components/input-product/InputProduct";
import Navigation from "../../../components/navbar/Navigation";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import TitleBox from "../../../components/title-box/TitleBox";
import Swal from "sweetalert2";
import axios from 'axios'

const InsertGeneralProduct = () => {

    const navigate = useNavigate()
    const [dataList,setDatalist] = useState([])
    const [name,setName] = useState('')
    const [game_name,setGame_name] = useState('')
    const [normal_price,setNormal_price] = useState('')
    const [special_price,setSpecial_price] = useState('')
    const [info,setInfo] = useState('')
    const [descript,setDescript] = useState('')
    
    const insertProduct = () => {
        axios.post(`${process.env.REACT_APP_API}/create-general-product`,{
            name : name,
            game_name : game_name,
            normal_price : normal_price,
            special_price : special_price,
            information : info,
            description : descript
        }).then(() => [
            ...dataList,
            {
                name : name,
                game_name : game_name,
                normal_price : normal_price,
                special_price : special_price,
                information : info,
                description : descript
            }
        ])
    }

    const confirmInsert = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        insertProduct()
        // console.log(`${name}`)
        navigate('/product-management')
    }

    const handleChange = (e) => {
        // console.log(e.target.files[0].name)
        setInfo(URL.createObjectURL(e.target.files[0]))
        // console.log(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <div className="container mx-auto">
            <MetaHeader title={`เพิ่มสินค้า`} />
            <Navigation/>
            <TitleBox text='เพิ่มสินค้า'/>
            
            <div className="grid mx-auto">
                <InputProduct title='ชื่อสินค้า' type="text" placeholder="ชื่อสินค้า" className="input w-full max-w-xs bg-neutral " onChange={setName} />

                <Selection title="เกม" disabled='เกม' onClick={setGame_name}/>

                <InputProduct title="ราคาเต็ม" type="text" placeholder="ราคาเต็ม" className="input w-full max-w-xs bg-neutral" onChange={setNormal_price}/>
                <InputProduct title="ราคาลด" type="text" placeholder="ราคาลด" className="input w-full max-w-xs bg-neutral" onChange={setSpecial_price}/>
                <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16">
                    <div className="text text-3xl text-secondary w-7/12 ">รูปภาพ</div>
                    <input type="file" accept=".png" placeholder="นำเข้าไฟล์URL" className="file-input max-w-xs w-full bg-neutral " onChange={handleChange} />

                </div>
                <div className="flex flex-row mt-10 mx-44 w-4/12 h-full gap-x-16">
                    <div className="text text-3xl text-secondary w-7/12">รายละเอียด</div>
                    <input type="text" placeholder="คำอธิบายสินค้า" className="input w-full h-full max-w-xs bg-neutral" onChange={(text) => setDescript(text.target.value)}/>
                </div>
            </div>
            <div className="flex flex-row mt-20 mb-10 mx-44 w-4/12 gap-x-16">
                <button className="btn btn-success w-max" onClick={() => confirmInsert('เพิ่มสินค้าสำเร็จ')}>ยืนยันการเพิ่มสินค้า</button>
                <Link to='/product-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มสินค้า</button></Link>
            </div>
        </div>
    )
}

export default InsertGeneralProduct;