import React from "react";
import { Link } from "react-router-dom";


const TitleBox = ({ text, tag,path,admin }) => {
    return (
        <div className="flex flex-col mt-10 mx-44">
            <div className="flex flex-row">
                {admin ?
                    <div className="flex flex-row">
                        <div className="text text-3xl text-primary">{text}</div>
                        <Link to={path}><button className="btn btn-success btn-sm mx-5">{tag}</button></Link>
                    </div>
                    : <div className="text text-3xl text-primary">{text}</div>}


            </div>

            <hr className="w-full h-2 my-5 border-10 bg-primary" />
        </div>
    )
}

export default TitleBox;