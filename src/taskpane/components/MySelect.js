
import * as React from "react";

export const MySelect = ({label, name}) => {
    // const [field] = useField(props);

    return ( 
        <>
            <label htmlFor={name } className='ms-u-slideUpIn20 ms-font-xl ms-fontWeight-semilight' >{label}</label>
            <select name={name} id={name} className='ms-font-m ms-fontColor-neutralPrimary input ms-ListItem'>
                <option value='JPG' >JPG</option>
                <option value='PDF' >PDF</option>
                <option value='TXT' >TXT</option>
            </select>
            {/* <ErrorMessage name={props.name} component="span" className='ms-font-l ms-fontWeight-semilight'  /> */}
        </>
    )
}