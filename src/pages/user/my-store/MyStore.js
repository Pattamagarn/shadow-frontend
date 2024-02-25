import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Navigation from '../../../components/navbar/Navigation'
import MetaHeader from '../../../components/meta-header/MetaHeader'
import TitleBox from '../../../components/title-box/TitleBox'
import DataTable from 'react-data-table-component'
import axios from 'axios'

const MyStore = () => {

    const [data_product, setData_product] = useState([])
    const [record_product,setRecord_product] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/read-store-product`, { withCredentials: true })
            .then((response) => {
                console.log(response.data.payload)
                setData_product(response.data.payload)


            })
            .catch((error) => { })
    })

    const columns_data_product = [
        {
            name: 'ชื่อเกม',
            selector: row => row.game_name
        },
        {
            name: 'ชื่อสินค้า',
            selector: row => row.product,

        },
        {
            name: 'สถานะ',
            selector: row => row.amount,

        },
        {
            name: 'โค้ดสินค้า',
            selector: row => row.auction,

        },
        {
            name: 'ซ่อน',
            selector: row => row.hide,
            cell: (d) => [<button
                key={d.title}>[d.hide ?
                 <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-success btn-sm w-5/12 "
                  
                ><Icon icon={"mdi:show"} className='text-[#000000]' width={25} height={25} /></p> :
                <p
                  key={d.title}
                  onClick={handleClick.bind(this, d.title)}
                  className="btn btn-success btn-sm w-5/12 "
                  
                ><Icon icon={"mdi:hide"} className='text-[#000000]' width={25} height={25} /></p>
                
                ]
            </button>
            ]
        },
    ]

    const filterData = (event) => {
        const newData_product = data_product.filter(row => {
            return row.game_name.toLowerCase().includes(event.target.value.toLowerCase()) || row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecord_product(newData_product)
    }

    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
      };
    return (
        <div className='container mx-auto'>
            <MetaHeader title='คลังของฉัน' />
            <Navigation />
            <TitleBox text='คลังของฉัน' />
            <div className='container mt-5 px-40'>
            <div className='text-end'> <input type='text' placeholder='ชื่อสินค้าหรือชื่อเกม' onChange={filterData} className='text-center border rounded-lg h-9'></input></div>
                <DataTable
                    columns={columns_data_product}
                    data={record_product.length <= 0 ? data_product : record_product}
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

export default MyStore;