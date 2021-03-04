import React from 'react';
import './shiftLabel.scss';

export default function ShiftLabel({ styles,title,labelFor,className,...rest }) {
    const style = {
        left: "10px",
        margin: 0,        
        zIndex:"1000",
        padding: "0 5px",
        ...styles
    } 
    return(
        <>
            <label style={style} {...rest} htmlFor={labelFor} className={className}>{title}</label>
        </>
    )
}
