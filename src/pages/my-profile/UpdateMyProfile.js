import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';
import MetaHeader from '../../components/meta-header/MetaHeader';
import TitleBox from '../../components/title-box/TitleBox';

const UpdateMyProfile = () => {
    return (
        <div container mx-auto>
            <MetaHeader title='แก้ไขโปรไฟล์ของฉัน' />
            <Navigation />
            <TitleBox text='แก้ไขโปรไฟล์' />
            <Link to='/' className='btn btn-primary'>Update Profile but back to home click!!!</Link>
        </div>
    )
}

export default UpdateMyProfile;