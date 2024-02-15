import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import MetaHeader from '../../components/meta-header/MetaHeader'
import Navigation from '../../components/navbar/Navigation';


const Transaction = () => {
    return (
        <>
            <MetaHeader title={`ธุรกรรมของฉัน`} />
            <Navigation />
            <Link to='/' className='btn btn-primary'>click me</Link>
        </>

    )

}

export default Transaction;