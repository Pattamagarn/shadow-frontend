import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Selection from "../../components/select/Selection";
import InputProduct from "../../components/input-product/InputProduct";
import Navigation from "../../components/navbar/Navigation";
import MetaHeader from "../../components/meta-header/MetaHeader";
import axios from 'axios'

const InsertGeneralProduct = () => {

    const [data_game_nameList, setData_game_nameList] = useState()
    const [info, setInfo] = useState('')
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/game-name-select`)
            .then((response) => {
                setData_game_nameList(response.data.payload)

            })
            .catch((error) => { })
    })

    const handleChange = (e) => {
        console.log(e.target.files[0].name)
        setInfo(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <div className="container mx-auto">
             <MetaHeader title={`เพิ่มสินค้า`} />
            <Navigation/>
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">เพิ่มสินค้า</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
            
            <div className="grid mx-auto">
                <InputProduct title='ชื่อสินค้า' type="text" placeholder="ชื่อสินค้า" className="input w-full max-w-xs bg-neutral " />

                <Selection title="เกม" disabled='เกม' option={data_game_nameList} />

                <InputProduct title="ราคาเต็ม" type="text" placeholder="ราคาเต็ม" className="input w-full max-w-xs bg-neutral" />
                <InputProduct title="ราคาลด" type="text" placeholder="ราคาลด" className="input w-full max-w-xs bg-neutral" />
                <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16">
                    <div className="text text-3xl text-secondary w-7/12 ">รูปภาพ</div>
                    <input type="file" accept=".png" placeholder="นำเข้าไฟล์URL" className="file-input max-w-xs w-full bg-neutral " onChange={handleChange} />

                </div>
                <div className="flex flex-row mt-10 mx-44 w-4/12 h-full gap-x-16">
                    <div className="text text-3xl text-secondary w-7/12">รายละเอียด</div>
                    <input type="text" placeholder="คำอธิบายสินค้า" className="input w-full h-full max-w-xs bg-neutral" />
                </div>
            </div>
            <div className="flex flex-row mt-20 mb-10 mx-44 w-4/12 gap-x-16">
                <Link to='/product-management'><button className="btn btn-success w-max">ยืนยันการเพิ่มสินค้า {console.log(`$info`)}</button></Link>
                <Link to='/product-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มสินค้า</button></Link>
            </div>
        </div>
    )
}

export default InsertGeneralProduct;