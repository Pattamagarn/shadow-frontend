import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';
import TitleBox from '../../components/title-box/TitleBox';
import MetaHeader from '../../components/meta-header/MetaHeader';


const MyProfile = () => {
    return (
        <div className='container mx-auto'>
            <MetaHeader title={`โปรไฟล์ของฉัน`} />
            <Navigation />
            <TitleBox text='โปรไฟล์ของฉัน' />
            <Link to='/' className='btn btn-primary'>click!!!</Link>
        </div>
    )
}

export default MyProfile;