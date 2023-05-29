import React from "react";

const Input = ({type, className, value, onChange, label, classLabel, disabled}) => {
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
            disabled={disabled}
        />
        </>
    )
}

export default Input