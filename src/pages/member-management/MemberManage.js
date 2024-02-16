import React from "react";
import { Link } from "react-router-dom";
import MetaHeader from "../../components/meta-header/MetaHeader";
import Navigation from "../../components/navbar/Navigation";

const MemberManage = () => {
    return (
        <>
            <MetaHeader title={`จัดการบัญชีผู้ใช้`} />
            <Navigation />
            <Link to='/' className='btn btn-primary'>click me to home</Link>
        </>
    )
}

export default MemberManage;