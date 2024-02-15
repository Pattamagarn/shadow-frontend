import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import MetaHeader from '../../components/meta-header/MetaHeader'
import Navigation from '../../components/navbar/Navigation';

const TopUp = () => {
    return(
        <>
        <MetaHeader title={`หน้าเติมเงิน`} />
        <Navigation />
        <Link to='/' className='btn btn-primary'>Click me</Link>
    </>
    )
    

}

export default TopUp;