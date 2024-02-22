import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../components/navbar/Navigation'
import MetaHeader from '../../../components/meta-header/MetaHeader'
import TitleBox from '../../../components/title-box/TitleBox'

const MyStore = () => {
    return (
        <div className='container mx-auto'>
            <MetaHeader title='คลังของฉัน' />
            <Navigation />
            <TitleBox text='คลังของฉัน' />
            <Link to='/' className='btn btn-primary'>click!!!</Link>
        </div>
    )
}

export default MyStore;