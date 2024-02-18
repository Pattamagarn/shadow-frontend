import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import Selection from "../../components/select/Selection";
import InputProduct from "../../components/input-product/InputProduct";
import Navigation from "../../components/navbar/Navigation";
import MetaHeader from "../../components/meta-header/MetaHeader";
import axios from 'axios'

const InsertAuctionProduct = () => {

    const [data_game_nameList,setData_game_nameList] = useState()

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API}/game-name-select`)
    //     .then((response) => {
    //         setData_gachaList(response.data.payload)
            
    //     })
    //     .catch((error) => {})
    // })
    

    return (
        <div className="container mx-auto">
             <MetaHeader title={`เพิ่มสินค้าประมูล`} />
            <Navigation/>
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">เพิ่มสินค้าประมูล</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
            <div className="grid mx-auto">
                <InputProduct title='ชื่อสินค้า' type="text" placeholder="ชื่อสินค้า" className="input w-full max-w-xs bg-neutral " />
                <Selection title="เกม" disabled='เกม' option={data_game_nameList} />
                <InputProduct title='ราคาเริ่มต้น' type="text" placeholder="0" className="input w-full max-w-xs bg-neutral " />
                <InputProduct title='ประมูลพื้นฐานครั้งละ' type="text" placeholder="50" className="input w-full max-w-xs bg-neutral " />
                <InputProduct title='เวลาเริ่มต้น' type="text" placeholder="15/1/2024 00:00:00" className="input w-full max-w-xs bg-neutral " />
                <InputProduct title='เวลาสิ้นสุด' type="text" placeholder="15/1/2024 00:00:01" className="input w-full max-w-xs bg-neutral " />
                <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16"> 
                    <div className="text text-3xl text-secondary w-7/12 ">รูปภาพ</div>
                    <input type="file" placeholder="นำเข้าไฟล์URL" className="file-input max-w-xs w-full bg-neutral " />
                </div>
                <div className="flex flex-row mt-10 mx-44 w-4/12 h-full gap-x-16"> 
                    <div className="text text-3xl text-secondary w-7/12">รายละเอียด</div>
                    <textarea  placeholder="คำอธิบายสินค้า" className="textarea textarea-bordered w-full h-full max-w-xs bg-neutral" />
                </div>
            </div>
            <div className="flex flex-row mt-20 mb-10 mx-44 w-4/12 gap-x-16">
                <Link to='/product-management'><button className="btn btn-success w-max">ยืนยันการเพิ่มสินค้า</button></Link>
                <Link to='/product-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มสินค้า</button></Link>
            </div>
        </div>
    )
}

export default InsertAuctionProduct;