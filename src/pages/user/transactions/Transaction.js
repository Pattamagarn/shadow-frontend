// import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import MetaHeader from '../../../components/meta-header/MetaHeader'
import Navigation from '../../../components/navbar/Navigation';


const Transaction = () => {
    return (
        <>
            <MetaHeader title={`ธุรกรรมของฉัน`} />
            <Navigation />
            <div className="flex flex-col mt-10 mx-44">
                <div className="flex flex-row">
                    <div className="text text-3xl text-primary">ธุรกรรมของฉัน</div>
                    
                </div>
                
                <hr className="w-full h-2 my-5 border-10 bg-primary"/>
            </div>
        </>

    )

}

export default Transaction;