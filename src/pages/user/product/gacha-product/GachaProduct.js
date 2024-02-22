import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../../components/navbar/Navigation'
import MetaHeader from '../../../../components/meta-header/MetaHeader'
import TitleBox from '../../../../components/title-box/TitleBox'

const GachaProduct = () => {
    return(
        <div className='container mx-auto'>
            <MetaHeader title='สินค้าสุ่มกาชา' />
            <Navigation />
            <TitleBox text='สินค้าสุ่มกาชา' />
            <Link to='/' className='btn btn-primary'>click!!!</Link>
        </div>
    )
}

export default GachaProduct;