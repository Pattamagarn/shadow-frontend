import axios from 'axios'
import React,{ useEffect,useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import Navigation from '../../../components/navbar/Navigation';
import MetaHeader from '../../../components/meta-header/MetaHeader';
import TitleBox from '../../../components/title-box/TitleBox';

const GeneralManage = () => {
    
    const navigate = useNavigate()
    const [data_banner,setData_Banner] = useState([])
    const [data_game_name,setData_game] = useState([])
    const [data_payment_method,setData_payment_method] = useState([])
    const [uuid, setUUID] = useState("")

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
        .catch((error) => { })
        axios.get(`${process.env.REACT_APP_API}/payment-method-select`)
        .then((response) => {
            setData_payment_method(response.data.payload)

        })
        .catch((error) => { })

    })

    const columns_banner = [
        {
            name: 'ลำดับ',
            selector: row => row.uuid
        },
        {
            name: 'ลิงก์ภาพ',
            selector: row => row.information
        },
        {
            name: 'แก้ไข',
            selector: row => row.update,
            cell: (item) => [
                <p
                  key={item.title}
                  onClick={handleUpdateBanner.bind(this, item.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`แก้ไข`}</p>
            ]
        },
        {
            name: 'ลบ',
            selector: row => row.delete,
            cell: (item) => [
                <p
                  key={item.title}
                  onClick={handleClick.bind(this, item.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ลบ`}</p>
            ]
        },
    ]
    const columns_game_name = [
        {
            name:'ลำดับ',
            selector: row => row.uuid,
            sortable:true
            
        },
        {
            name:'ชื่อเกม',
            selector: row => row.game_name
        },
        {
            name: 'แก้ไข',
            selector: row => row.update,
            cell: (item) => [
                <p
                  key={item.title}
                  onClick={handleUpdateGameName.bind(this, item.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`แก้ไข`}</p>
            ]
        },
        {
            name: 'ลบ',
            selector: row => row.delete,
            cell: (item) => [
                <p
                  key={item.title}
                  onClick={handleDeleteGameName.bind(this,item.uuid)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ลบ`}</p>
            ]
        },
    ]
    const columns_payment_method = [
        {
            name: 'ลำดับ',
            selector: row => row.uuid,
            sortable:true
        },

        {
            name: 'วิธีการชำระเงิน',
            selector: row => row.method


        },
        {
            name: '',
            selector: row => row.information
        },
        {
            name: 'เปลี่ยน',
            selector: row => row.update,
            cell: (item) => [ item.method === "ภาพวิธีการชำระเงิน" ? 
                <p
                  key={item.title}
                  onClick={handleUpdatePaymentMethodInfo.bind(this, item.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`เปลี่ยน`}</p> : 
                <p
                  key={item.title}
                  onClick={handleUpdatePaymentMethodVideo.bind(this, item.title)}
                  className="btn btn-warning btn-sm w-6/12 "
                  
                >{`เปลี่ยน`}</p>
            ]
        },
        {
            name: 'ล้าง',
            selector: row => row.delete,
            cell: (item) => [
                <p
                  key={item.title}
                  onClick={handleClick.bind(this, item.title)}
                  className="btn btn-error btn-sm w-6/12 "
                  
                >{`ล้าง`}</p>
            ]
        },
    ]


    const handleClick = (title) => {
        console.log(`You clicked me! ${title}`);
    };
    const handleUpdateGameName = (title) => {
        navigate('/update-game-name')
    };
    const handleUpdatePaymentMethodInfo = (title) => {
        navigate('/update-payment-method-info')
    };
    const handleUpdatePaymentMethodVideo = (title) => {
        navigate('/update-payment-method-video')
    };
    const handleUpdateBanner = (title) => {
        navigate('/update-banner')
    };
    
    const handleDeleteGameName = (uuid) => {
        console.log(uuid);
        axios.delete(`${process.env.REACT_APP_API}/game-name-delete/${uuid}`)
            .then((response) => {
                console.log('Data deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting data:', error);
            });
    };



    return (
        <div className='container mx-auto'>
            <MetaHeader title={'การจัดการทั่วไป'} />
            <Navigation />
            {/*banner */}
            <TitleBox text="การจัดการแบนเนอร์" tag='เพิ่มแบนเนอร์' path='/insert-banner' admin='true' />
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_banner}
                    data={data_banner}
                    fixedHeader
                    pagination
                    persistTableHead={true}
                    className='table px-10'
                >

                </DataTable>
            </div>

            {/*Game name */}

            <TitleBox text="การจัดการชื่อเกม" tag='เพิ่มชื่อเกม' path='/insert-game-name' admin />
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_game_name}
                    data={data_game_name}
                    fixedHeader
                    pagination
                    persistTableHead={true}
                    className='table px-10'
                >

                </DataTable>
            </div>
            {/*payment method */}
            <TitleBox text="การจัดการวิธีการชำระเงิน" />
            <div className='container mt-5 px-40'>
                <DataTable
                    columns={columns_payment_method}
                    data={data_payment_method}
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

export default GeneralManage;