import React from "react";
import { Link } from "react-router-dom";
import './style/NavBar.css';


const NavBar= ()=>{

    return(
        <aside className='site-links'>
            <Link className='links' to='/'>Home</Link>

            <Link className='links' to='/post'>See Post</Link>

            <Link className='links' to='/newpost'>Make A New Post</Link>

            <Link className='links' to='/newuser'>Create Account</Link>

            <Link className='links' to='/profile'>Profile</Link>
        </aside>
    )
}

export default NavBar;