import React from "react";

const Input = ({type, className, value, onChange, label, classLabel}) => {
    return (
        <>
        <label 
            htmlFor={label}
            className={classLabel}
            >{label}
        </label>
        <input 
            type={type}
            className={className}
            value={value}
            name={label}
            onChange={onChange}
        />
        </>
    )
}

export default Input