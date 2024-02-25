import React from "react";

const InputProduct = ({title,type,placeholder,onChange}) => {
    return(
        <div className="input-product-group">
            <div className="flex flex-row mt-10 mx-44 w-4/12 gap-x-16"> 
                    <div className="text text-3xl text-secondary w-7/12 ">{title}</div>
                    <input type={type} placeholder={placeholder} className="input w-full max-w-xs bg-neutral " onChange={(text) => onChange(text.target.value)} />
                </div>
        </div>
    )
}

export default InputProduct;