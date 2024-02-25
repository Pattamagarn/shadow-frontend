import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MetaHeader from "../../../components/meta-header/MetaHeader";
import Navigation from "../../../components/navbar/Navigation";
import TitleBox from "../../../components/title-box/TitleBox";
import Swal from 'sweetalert2'
import axios from "axios";


const InsertGameName = () => {
    const navigate = useNavigate()
    const [gameNameList, setGameNameList] = useState([])
    const [gameName, setGameName] = useState("")

    const insertGamename = () => {
        axios.post(`${process.env.REACT_APP_API}/game-name-insert`,{
            game_name: gameName
        }).then(() => [
            ...gameNameList,
            {
                game_name: gameName
            }
        ])
    }

    const confirmInsert = (message) => {
        Swal.fire({
            title: 'สำเร็จ',
            text: message,
            icon: 'success',
            confirmButtonText: 'ตกลง'
        })
        insertGamename()
        // console.log(gameName)
        navigate('/general-management')
    }

    return (
        <div className="container mx-auto">
            <MetaHeader title={`เพิ่มชื่อเกม`} />
            <Navigation />
            <TitleBox text='เพิ่มชื่อเกม' />


            <div className="flex flex-row mt-5 mx-44 justify-evenly">
                <div className="text text-3xl">ชื่อเกม</div>
                <input 
                    type="text" 
                    className="file-input w-6/12 bg-neutral px-5" 
                    placeholder="เพิ่มชื่อเกม"
                    onChange={(event) => {
                        setGameName(event.target.value)
                    }} 
                />
                <button className="btn btn-success w-max" onClick={() => confirmInsert('เพิ่มชื่อเกมสำเร็จ')}>ยืนยันการเพิ่มชื่อเกม</button>
                <Link to='/general-management'><button className="btn btn-error w-max">ยกเลิกการเพิ่มชื่อเกม</button></Link>
            </div>

        </div>
    )
}

export default InsertGameName;