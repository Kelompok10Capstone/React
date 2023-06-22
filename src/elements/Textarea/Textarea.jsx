
import React from "react";

const Textarea = ({type, className, value, onChange, label, classLabel, placeholder,ariallabel, style, disabled, accept, name, rows}) => {

    return (
        <>
        <label 
            htmlFor={label}
            className={classLabel}
            >{label}
        </label>
        <textarea 
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
            rows={rows}
        />
        </>
    )
}

export default Textarea