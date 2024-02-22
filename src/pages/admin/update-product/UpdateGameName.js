import React from "react";
import { Link } from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";

const UpdateGameName = () => {
    return (
        <div className="container mx-auto">
            <MetaHeader title={`แก้ไขชื่อเกม`} />
            <Navigation />
            <Link to='/' className='btn btn-primary'>click me to home</Link>
        </div>
    )
}

export default UpdateGameName;