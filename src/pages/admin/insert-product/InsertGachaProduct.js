import React,{useEffect,useState} from "react";
import Selection from "../../../components/select/Selection";
import InputProduct from "../../../components/input-product/InputProduct";
import Navigation from "../../../components/navbar/Navigation";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import { Link,useNavigate } from "react-router-dom";
import TitleBox from "../../../components/title-box/TitleBox";
import axios from 'axios'

const InsertGachaProduct = () => {

    const navigate = useNavigate()
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
            <MetaHeader title={`เพิ่มสินค้ากาชาปอง`} />
            <Navigation />
            <TitleBox text='เพิ่มสินค้ากาชาปอง' />
            
            
            <div className="grid mx-auto">
                <InputProduct title='ชื่อสินค้า' type="text" placeholder="ชื่อสินค้า" className="input w-full max-w-xs bg-neutral " />
                <Selection title="เกม" disabled='เกม' option={data_game_nameList} />
                <InputProduct title="% การดรอป" placeholder='เปอร์เซ็นต์การดรอป' option={data_game_nameList} />
                <Selection title="การันตี" disabled='' option={data_game_nameList} />
                <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16"> 
                    <div className="text text-3xl text-secondary w-7/12 ">รูปภาพ</div>
                    <input type="file" placeholder="นำเข้าไฟล์URL" className="file-input max-w-xs w-full bg-neutral " />
                </div>
                <div className="flex flex-row mt-10 mx-44 w-4/12 h-full gap-x-16"> 
                    <div className="text text-3xl text-secondary w-7/12">รายละเอียด</div>
                    <input type="text" placeholder="คำอธิบายสินค้า" className="input w-full h-full max-w-xs bg-neutral" />
                </div>
            </div>
            <div className="flex flex-row mt-20 mb-10 mx-44 w-4/12 gap-x-16">
                <Link to='/product-management'><button className="btn btn-success w-max">ยืนยันการเพิ่มสินค้า</button></Link>
                <Link to='/product-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มสินค้า</button></Link>
            </div>
        </div>
    )
}

export default InsertGachaProduct;