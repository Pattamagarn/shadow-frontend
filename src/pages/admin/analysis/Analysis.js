import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react'
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import TitleBox from "../../../components/title-box/TitleBox";
import DataTable from 'react-data-table-component';

const Analysis = () => {

    const [account, setAccount] = useState([])
    const [aysel, setAysel] = useState([])
    const [amount, setAmount] = useState([])
    const [product, setProduct] = useState([])

    const [top_product, setTop_product] = ([])
    const columns_top_product = [
        {
            name: 'ลำดับ',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'ชื่อเกม',
            selector: row => row.game_name
        },
        {
            name: 'ชื่อสินค้า',
            selector: row => row.product,

        },
        {
            name: 'จำนวน',
            selector: row => row.amount,

        },
        {
            name: 'ประมูลด่วน',
            selector: row => row.auction,
            cell: (d) => [<button
                key={d.title}>
                <Icon icon={"mingcute:auction-line"} className='text-[#000000]' width={25} height={25} />
            </button>
            ]
        },
    ]

    return (
        <div className="container mx-auto">
            <MetaHeader title={`วิเคราะห์ข้อมูล`} />
            <Navigation />
            <TitleBox text="วิเคราะห์ข้อมูล" />
            <div className="container mx-auto px-44 text-lg ">
                <li>จำนวนบัญชีทั้งหมดในระบบ {account} บัญชี</li>
                <li>จำนวนบัญชีผู้ดูแลระบบทั้งหมดในระบบ {account.admin} บัญชี</li>
                <li>จำนวนบัญชีสมาชิกทั้งหมดในระบบ {account.member} บัญชี</li>
                <li>จำนวน Aysel ที่ขายไปทั้งหมด {aysel} Aysel</li>
                <li>จำนวนเงินที่ได้รับทั้งหมด {amount} บาท</li>
                <li>จำนวนสินค้าที่ขายไปทั้งหมด {product} ชิ้น</li>
            </div>
            <TitleBox text='10 อันดับของขายดีประจำวัน' />
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_top_product}
                    data={top_product}
                    fixedHeader
                    pagination 
                    persistTableHead={true}
                >
                </DataTable>
            </div>
        </div>
    )
}

export default Analysis;