import React from "react";
import {Route, NavLink} from "react-router-dom";

function Menu() {

    return (
        <>
            <NavLink to='/'>MainPage</NavLink>
            <NavLink to='/advantages'>Advantages</NavLink>
            <NavLink to='/parameters'>Parameters</NavLink>
            <NavLink to='/media'>Media</NavLink>
            <NavLink to='/downloads'>Downloads</NavLink>
            <NavLink to='/prices'>Prices</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
        </>
    )
}

export default Menu;
