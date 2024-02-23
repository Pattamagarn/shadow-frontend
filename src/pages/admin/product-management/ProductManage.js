import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import React,{ useEffect,useState } from 'react';
import { Icon } from '@iconify/react'
import DataTable from 'react-data-table-component';
import Navigation from '../../../components/navbar/Navigation';
import MetaHeader from '../../../components/meta-header/MetaHeader';
import TitleBox from '../../../components/title-box/TitleBox';

const ProductManage = () => {
    const [data_general,setData_general] = useState([])
    const [record_general,setRecord_general] = useState([])
    const [data_gacha,setData_gacha] = useState([])
    const [record_gacha,setRecord_gacha] = useState(data_gacha)
    const [data_auction,setData_auction] = useState([])
    const [record_auction,setRecord_auction] = useState(data_auction)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/read-general-product`)
        .then((response) => {
            setData_general(response.data.payload)
            
        })
        .catch((error) => {})
        axios.get(`${process.env.REACT_APP_API}/read-gacha-product`)
        .then((response) => {
            setData_gacha(response.data.payload)
            
        })
        .catch((error) => {})
        axios.get(`${process.env.REACT_APP_API}/read-auction-product`)
        .then((response) => {
            setData_auction(response.data.payload)
            
        })
        .catch((error) => {})

    },[])
    const columns_genaral = [
        {
            name:'ชื่อเกม',
            selector: row => row.game_name,
            sortable:true
        },
        {
            name:'ชื่อสินค้า',
            selector: row => row.name
        },
        {
            name:'ราคาลด',
            selector: row => row.special_price,
            sortable:true
        },
        {
            name:'ราคา',
            selector: row => row.normal_price,
            sortable:true
        },
        {
            name:'ลดราคา',
            selector: row => row.special_price_status,
            cell: (d) => [d.special_price_status ?
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-success btn-sm w-5/12 "
                  
                >{`เปิด`}</p> : <p
                key={d.title}
                onClick={handleClick.bind(this, d.title)}
                className="btn btn-error btn-sm w-5/12"
              >{`ปิด`}</p>
              ]
        },
        {
            name:'แก้ไข',
            selector: row => row.update,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`แก้ไข`}</p>
              ]
        },
        {
            name:'ลบ',
            selector: row => row.delete,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ลบ`}</p>
              ]
        },
    ]
    const columns_auction = [
        {
            name:'ชื่อเกม',
            selector: row => row.game_name,
            sortable:true
        },
        {
            name:'ชื่อสินค้า',
            selector: row => row.name
        },
        {
            name:'ราคาปัจจุบัน',
            selector: row => row.special_price,
            sortable:true
        },
        {
            name:'สถานะ',
            selector: row => row.special_price_status,
            cell: (d) => [d.special_price_status ?
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-success btn-sm w-5/12 "
                  
                >{`เปิด`}</p> : <p
                key={d.title}
                onClick={handleClick.bind(this, d.title)}
                className="btn btn-error btn-sm w-5/12"
              >{`ปิด`}</p>
              ]
        },
        {
            name:'แก้ไข',
            selector: row => row.update,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`แก้ไข`}</p>
              ]
        },
        {
            name:'ลบ',
            selector: row => row.delete,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ลบ`}</p>
              ]
        },
    ]
    const columns_gacha = [
        {
            name:'ชื่อเกม',
            selector: row => row.game_name,
            sortable:true
        },
        {
            name:'ชื่อสินค้า',
            selector: row => row.name
        },
        {
            name:'อัตราการออก',
            selector: row => row.chance,
            sortable:true
        },
        {
            name:'การันตี',
            selector: row => row.guarantee_status,
            cell: (d) => [d.special_price_status ?
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-success btn-sm w-5/12 "
                  
                >{`เปิด`}</p> : <p
                key={d.title}
                onClick={handleClick.bind(this, d.title)}
                className="btn btn-error btn-sm w-5/12"
              >{`ปิด`}</p>
              ]
        },
        {
            name:'แก้ไข',
            selector: row => row.update,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`แก้ไข`}</p>
              ]
        },
        {
            name:'ลบ',
            selector: row => row.delete,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ลบ`}</p>
              ]
        },
    ]


    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
      };

    const filtergeneral = (event) => {
        const newData_general = data_general.filter(row => {
            return row.game_name.toLowerCase().includes(event.target.value.toLowerCase()) || row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecord_general(newData_general)
    }
    const filtergacha = (event) => {
        const newData_gacha = data_gacha.filter(row => {
            return row.game_name.toLowerCase().includes(event.target.value.toLowerCase()) || row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecord_gacha(newData_gacha)
    }
    const filterauction = (event) => {
        const newData_auction = data_auction.filter(row => {
            return row.game_name.toLowerCase().includes(event.target.value.toLowerCase()) || row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecord_auction(newData_auction)
    }
    return(
        
        <div className="container">
            <MetaHeader title={`การจัดการสินค้า`} />
            <Navigation/>
            {/*ชื่อหัวข้อทั่วไป + ปุ่ม */}
            <TitleBox text='จัดการสินค้า' tag='เพิ่มสินค้า' path='/insert-general-product' admin />
            
            <div className='container mt-5 px-40'>
                <div className='text-end'> <input type='text' placeholder='ชื่อสินค้าหรือชื่อเกม' onChange={filtergeneral}></input></div>
                <DataTable
                    columns={columns_genaral}
                    data={record_general.length <= 0 ? data_general : record_general}
                    fixedHeader
                    pagination 
                    persistTableHead={true}
                    minRows={5}
                    className='table px-10'
                >
                </DataTable>
            </div>

            {/*ชื่อหัวข้อกาชา + ปุ่ม */}
            <TitleBox text='จัดการสินค้ากาชาปอง' tag='เพิ่มสินค้ากาชาปอง' path='/insert-gacha-product' admin/>
            
            <div className='container mt-5 px-40'>
                <div className='text-end'> <input type='text' placeholder='ชื่อสินค้าหรือชื่อเกม' onChange={filtergacha}></input></div>
                <DataTable
                    columns={columns_gacha}
                    data={record_gacha.length <= 0 ? data_gacha : record_gacha}
                    fixedHeader
                    pagination 
                    persistTableHead={true}
                    className='table px-10'
                >

                </DataTable>
            </div>

            {/*ชื่อหัวข้อประมูล + ปุ่ม */}
            <TitleBox text='จัดการสินค้าประมูล' tag='เพิ่มสินค้าประมูล' path='/insert-auction-product' admin/>
            
            <div className='container mt-5 px-40'>
                <div className='text-end'> <input type='text' placeholder='ชื่อสินค้าหรือชื่อเกม' onChange={filterauction}></input></div>
                <DataTable
                    columns={columns_auction}
                    data={record_auction.length <= 0 ? data_auction : record_auction}
                    fixedHeader
                    pagination 
                    persistTableHead={true}
                    className='table px-10'
                >

                </DataTable>
            </div>
            
            
        </div>
    )
}

export default ProductManage;