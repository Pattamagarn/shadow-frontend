import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import Navigation from '../../../../components/navbar/Navigation'
import MetaHeader from '../../../../components/meta-header/MetaHeader'
import TitleBox from '../../../../components/title-box/TitleBox'

const AuctionProduct = () => {
    return (
        <div className='container mx-auto'>
            <MetaHeader title='สินค้าประมูล' />
            <Navigation />
            <TitleBox text='สินค้าประมูล' />
            <Link to='/' className='btn btn-primary'>click!!!</Link>
        </div>

    )
}

export default AuctionProduct;