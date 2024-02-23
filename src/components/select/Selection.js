import React,{useDebugValue, useEffect,useState} from "react";
import axios from "axios";

const Selection = ({ title,disabled,onClick }) => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/game-name-select`)
        .then((response) => {
            // console.log(response.data.payload[0].game_name)
            setData(response.data.payload)
        })
    })

    return (
        <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16">
            <div className="text text-3xl text-secondary w-7/12 ">{title}</div>
            <select className="select select-bordered w-full max-w-xs bg-neutral">
                <option disabled selected>{disabled}</option>
                {data.map((x) => <option>{x.game_name}</option>)}
            </select>
        </div>

    )

}

export default Selection;