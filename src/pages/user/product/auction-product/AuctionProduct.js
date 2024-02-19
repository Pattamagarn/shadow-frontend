import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import Navigation from '../../../../components/navbar/Navigation'

const AuctionProduct = () => {
    return(
        <>
        <Navigation/>
        <Link to='/' className='btn btn-primary'>click me to home</Link>
        </>
        
    )
}

export default AuctionProduct;