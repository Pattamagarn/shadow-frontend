import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../../components/navbar/Navigation'
import MetaHeader from '../../../../components/meta-header/MetaHeader'
import TitleBox from '../../../../components/title-box/TitleBox'

const Product = () => {
    return(
        <div className='container mx-auto'>
            <MetaHeader title=''/>
            <Navigation />
            <TitleBox text='ชื่อสินค้า' />
            <Link to='/' className='btn btn-primary'>click!!!</Link>
        </div>
    )
}

export default Product;