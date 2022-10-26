import React from 'react';
import './button.scss'
import {NavLink} from "react-router-dom";

function Button({children, url, color, textcolor, onClick}) {
    return (
        <NavLink to={url}>
            <button onClick={() => onClick()}
                    style={{borderColor: !color ? 'crimson' : 'black', color: !textcolor ? 'white' : 'black'}}
                    className='button'>{children}</button>
        </NavLink>
    );
}

export default Button;