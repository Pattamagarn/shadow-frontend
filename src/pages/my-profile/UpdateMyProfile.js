import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../components/navbar/Navigation';

const UpdateMyProfile = () => {
    return(
        <>
        <Navigation/>
        <Link to='/' className='btn btn-primary'>Update Profile but back to home click!!!</Link>
        </>
    )
}

export default UpdateMyProfile;