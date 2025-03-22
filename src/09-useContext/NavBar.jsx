import React from 'react';
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <div className="flex space-x-2 m-1">
            <NavLink className={ (({isActive}) => `link-header ${ isActive ? 'bg-amber-100' : '' }`) }
                     to="/">
                home
            </NavLink>
            <NavLink className={ (({isActive}) => `link-header ${ isActive ? 'bg-amber-100' : '' }`) }
                     to="/about">
                about
            </NavLink>
            <NavLink className={ (({isActive}) => `link-header ${ isActive ? 'bg-amber-100' : '' }`) }
                     to="login">
                Login
            </NavLink>
        </div>
    );
}

export default NavBar;