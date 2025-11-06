import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around align-items-center py-3  shadow'>
            <h3>HOME</h3>
            <ul className='list-style-none'>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/">Home</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/dashboard">Dashboard</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/signin">Login</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/signup">Register</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar