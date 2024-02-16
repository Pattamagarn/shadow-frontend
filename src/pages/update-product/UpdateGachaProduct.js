import React from "react";
import { Link } from "react-router-dom";
import MetaHeader from "../../components/meta-header/MetaHeader";
import Navigation from "../../components/navbar/Navigation";

const UpdateGachaProduct = () => {
    return (
        <>
            <MetaHeader title={`แก้ไขสินค้ากาชาปอง`} />
            <Navigation />
            <Link to='/' className='btn btn-primary'>click me to home</Link>
        </>
    )
}

export default UpdateGachaProduct;