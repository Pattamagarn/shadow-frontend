import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../components/navbar/Navigation';

const SaleProduct = () => {
    return(
        <>
        <Navigation/>
        <Link to='/' className='btn btn-primary'>click me to home</Link>
        </>
    )
}

export default SaleProduct;