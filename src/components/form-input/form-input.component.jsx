import React from 'react';

import './form-input.styles.css';

const FormInput = ({ handleChange , label, ...otherProps}) => (
    <div className="group">
        <input type="text" className="form-input" onChange={handleChange} {...otherProps}/>
        {
            label ?
            (<label className= {`${otherProps.value.lentgh ? 'shrink' : ''
            } form-input-label`}> 
                {label}
            </label>)
            :null
        }
    </div>
);

export default FormInput;