import React from "react";

function TextField ({ type, placeholder, ...props}) {
    return (
        <div className="flex flex-col">
            <input 
                type={type} 
                placeholder={placeholder} 
                className="rounded-md p-2 outline outline-black/5 focus:border invalid:border-red" 
                {...props}
            />
        </div>
    )
}

export default TextField;
