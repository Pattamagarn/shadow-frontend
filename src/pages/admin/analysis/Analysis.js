import React from "react";
import { Link } from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import TitleBox from "../../../components/title-box/TitleBox";

const Analysis = () => {
    return (
        <div className="container mx-auto">
            <MetaHeader title={`วิเคราะห์ข้อมูล`} />
            <Navigation />
            <TitleBox text="วิเคราะห์ข้อมูล" />
            <Link to='/' className='btn btn-primary'>click me to home</Link>
            <TitleBox text='10 อันดับของขายดีประจำวัน' />
        </div>
    )
}

export default Analysis;