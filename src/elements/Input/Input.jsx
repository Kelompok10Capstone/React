
import React from "react";

const Input = ({type, className, value, onChange, label, classLabel, placeholder,ariallabel, style, disabled, accept, name, hidden, ref}) => {

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
            name={name}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            aria-label={ariallabel}
            style={style}
            accept={accept}
            hidden={hidden}
            ref={ref}
        />
        </>
    )
}

export default Input