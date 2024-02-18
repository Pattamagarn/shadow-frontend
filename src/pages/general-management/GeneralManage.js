import axios from 'axios'
import React,{ useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import Navigation from '../../components/navbar/Navigation';

const GeneralManage = () => {
    
    const [data_banner,setData_Banner] = useState([])
    const [data_game_name,setData_game] = useState([])
    const [data_payment_method,setData_payment_method] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/banner-select`)
        .then((response) => {
            setData_Banner(response.data.payload)
            
        })
        .catch((error) => {})
        axios.get(`${process.env.REACT_APP_API}/game-name-select`)
        .then((response) => {
            setData_game(response.data.payload)
            
        })
        .catch((error) => {})
        axios.get(`${process.env.REACT_APP_API}/payment-method-select`)
        .then((response) => {
            setData_payment_method(response.data.payload)
            
        })
        .catch((error) => {})

    })

    const columns_banner = [
        {
            name:'ลำดับ',
            selector: row => row.id,
            sortable:true
        },
        {
            name:'ลิงก์ภาพ',
            selector: row => row.name
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
    const columns_game_name = [
        {
            name:'ลำดับ',
            selector: row => row.id,
            sortable:true
        },
        {
            name:'เกม',
            selector: row => row.name
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
    const columns_payment_method = [
        {
            name:'ลำดับ',
            selector: row => row.id,
            sortable:true
        },
        {
            name:'วิธีการชำระเงิน',
            
        },
        {
            name:'',
            selector: row => row.name
        },
        {
            name:'เปลี่ยน',
            selector: row => row.update,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`เปลี่ยน`}</p>
              ]
        },
        {
            name:'ล้าง',
            selector: row => row.delete,
            cell: (d) => [
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ล้าง`}</p>
              ]
        },
    ]


    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
    };

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    

    return(
        <div className='container mx-auto'>
            <Navigation/>
            {/*banner */}
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">การจัดการแบนเนอร์</div>
                    <Link to='/insert-banner'><button className="btn btn-success btn-sm mx-5">เพิ่มแบนเนอร์</button></Link>
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
            
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_game_name}
                    data={data_game_name}
                    fixedHeader
                    pagination 
                    paginationComponentOptions={paginationComponentOptions}
                >

                </DataTable>
            </div>

            {/*Game name */}
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">การจัดการชื่อเกม</div>
                    <Link to='/insert-game-name'><button className="btn btn-success btn-sm mx-5">เพิ่มชื่อเกม</button></Link>
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_banner}
                    data={data_banner}
                    fixedHeader
                    pagination 
                >

                </DataTable>
            </div>
            {/*payment method */}
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">การจัดการวิธีการชำระเงิน</div>
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_payment_method}
                    data={data_payment_method}
                    fixedHeader
                    pagination 
                >

                </DataTable>
            </div>
        </div>
    )
}

export default GeneralManage;