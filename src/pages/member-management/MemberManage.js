import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import MetaHeader from "../../components/meta-header/MetaHeader";
import Navigation from "../../components/navbar/Navigation";
import { Icon } from '@iconify/react'
const MemberManage = () => {
    const [data_member, setData_member] = useState([])
    const [record_member, setRecord_member] = useState([])
    const [memberId, setMemberid] = useState([{id:1},{id:2}])
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/account-select`)
            .then((response) => {
                setData_member(response.data.payload)
                console.log(response.data.payload)


            })
            .catch((error) => { })
    }, [])


    const columns_member = [
        // {
        //     name: 'ลำดับ',
        //     selector: row => row.email,
        //     sortable: true
        // },
        {
            name: 'บัญชี',
            selector: row => row.email,
            // sortable:true
        },
        {
            name: 'ชื่อผู้ใช้',
            selector: row => row.username
        },
        {
            name: 'ระงับ',
            selector: row => row.suspended_status,
            cell: (d) => [d.suspended_status ?
                <button
                    key={d.title}
                ><Icon icon={"solar:user-block-bold"} className='text-[#000000]' width={25} height={25} /></button> : <button
                    key={d.title}
                ><Icon icon={"solar:user-bold"} className='text-[#000000]' width={25} height={25} /></button>
            ]
        },
        {
            name: 'บทบาท',
            selector: row => row.role,
            sortable: true,
            cell: (d) => [d.role ?
                <p>ผู้ดูแลระบบ</p> : <p>สมาชิก</p>]
        }
    ]


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
                <Navigation />
                {/*ชื่อหัวข้อจัดการบัญชีผู้ใช้ + ปุ่ม */}
                <div className="flex flex-col mt-10 mx-44">
                    <div className="flex flex-row">
                        <div className="text text-3xl text-primary">จัดการบัญชีผู้ใช้</div>
                    </div>
                    <hr className="w-11/12 h-2 my-5 border-10 bg-primary" />
                </div>
                <div className='container mt-5 px-40'>
                    <div className='text-end'> <input type='text' placeholder='ชื่อบัญชีหรือชื่อผู้ใช้' onChange={filtermember}></input></div>
                    <DataTable
                        columns={columns_member}
                        // data = {record_member}
                        data={record_member.length <= 0 ? data_member : record_member}
                        fixedHeader
                        pagination
                        persistTableHead={true}
                        minRows={5}
                    >
                    </DataTable>

                </div>
            </div>
        </>
    )
}

export default MemberManage;