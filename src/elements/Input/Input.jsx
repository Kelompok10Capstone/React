
import React from "react";

const Input = ({type, className, value, onChange, label, classLabel, placeholder,ariallabel, style, disabled}) => {

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
            placeholder={placeholder}
            aria-label={ariallabel}
            style={style}
        />
        </>
    )
}

export default Input