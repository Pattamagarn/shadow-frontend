import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../../../components/navbar/Navigation'

const MyStore = () => {
    return(
        <>
        <Navigation/>
        <Link to='/' className='btn btn-primary'>click!!!</Link>
        </>
    )
}

export default MyStore;