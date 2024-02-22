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
            name: '',
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

    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
      };
    return (
        <div className='container mx-auto'>
            <MetaHeader title='คลังของฉัน' />
            <Navigation />
            <TitleBox text='คลังของฉัน' />
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_data_product}
                    data={data_product}
                    fixedHeader
                    pagination
                    persistTableHead={true}
                >
                </DataTable>
            </div>
        </div>
    )
}

export default MyStore;