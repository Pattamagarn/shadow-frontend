import React from "react";

const Selection = ({ title,disabled, option }) => {
    return (
        <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16">
            <div className="text text-3xl text-secondary w-7/12 ">{title}</div>
            <select className="select select-bordered w-full max-w-xs bg-neutral">
                <option disabled selected>{disabled}</option>
                <option>Shadow Garden</option>
            </select>
        </div>

    )

}

export default Selection;