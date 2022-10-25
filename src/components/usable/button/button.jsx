import React from 'react';
import './button.scss'
import {NavLink} from "react-router-dom";

function Button({children, url, color}) {
    return (
        <NavLink to={url}>
            <button style={{borderColor: !color ? 'crimson' : 'black', color: !color ? 'white' : 'black'}}
                    className='button'>{children}</button>
        </NavLink>
    );
}

export default Button;