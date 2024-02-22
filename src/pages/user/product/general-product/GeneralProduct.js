import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../../components/navbar/Navigation'
import MetaHeader from '../../../../components/meta-header/MetaHeader'
import TitleBox from '../../../../components/title-box/TitleBox'
import Product from '../product-detail/Product'

const GeneralProduct = () => {
    return(
        <div className='container mx-auto'>
            <MetaHeader title='สินค้าทั้งหมด' />
            <Navigation />
            <TitleBox text='สินค้าทั้งหมด' />
            <Link to='/product' className='btn btn-primary'>click!!!</Link>
            
        </div>
    )
}

export default GeneralProduct;