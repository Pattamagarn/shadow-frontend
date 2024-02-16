import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import React,{ useEffect,useState } from 'react';
import DataTable from 'react-data-table-component';
import MetaHeader from "../../components/meta-header/MetaHeader";
import Navigation from "../../components/navbar/Navigation";

const MemberManage = () => {
    const [data_member,setData_member] = useState([])
    const [record_member,setRecord_member] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/authentication-account`)
        .then((response) => {
            setData_member(response.data.payload)
            
        })
        .catch((error) => {})
    },[])
    const columns_member = [
        {
            name:'บัญชี',
            selector: row => row.email,
            sortable:true
        },
        {
            name:'ชื่อผู้ใช้',
            selector: row => row.username
        },
        {
            name:'ระงับ',
            selector: row => row.suspended_status,
            sortable:true
        },
        {
            name:'บทบาท',
            selector: row => row.role,
            sortable:true
        }
    ]

    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
      };

    const filtermember = (event) => {
        const newData_member = data_member.filter(row => {
            return row.email.toLowerCase().includes(event.target.value.toLowerCase()) || row.username.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecord_member(newData_member)
    }
    return (
        <>
            <MetaHeader title={`จัดการบัญชีผู้ใช้`} />
            <div className="container">
            <Navigation/>
            {/*ชื่อหัวข้อจัดการบัญชีผู้ใช้ + ปุ่ม */}
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">จัดการบัญชีผู้ใช้</div>
                </div>
                <hr className="w-11/12 h-2 my-5 border-10 bg-primary"/>
            </div>
            <div className='container mt-5 px-40'>
                <div className='text-end'> <input type='text' placeholder='ชื่อบัญชีหรือชื่อผู้ใช้' onChange={filtermember}></input></div>
                <DataTable
                    columns={columns_member}
                    data = {record_member}
                    // data={record_member.length <= 0 ? data_member : record_member}
                    fixedHeader
                    pagination 
                    persistTableHead={true}
                >
                </DataTable>
            </div>
            </div>
        </>
    )
}

export default MemberManage;