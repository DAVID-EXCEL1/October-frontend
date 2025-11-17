import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        // Remove token and user data from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        alert('Logged out successfully!');
        
        // Redirect to signin page
        navigate('/signin');
    };

    return (
        <nav className='d-flex justify-content-around align-items-center py-3  shadow'>
            <h3>HOME</h3>
            <ul className='list-style-none'>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/">Home</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/dashboard">Dashboard</Link></li>
                {!token ? (
                    <>
                        <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/signin">Login</Link></li>
                        <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/signup">Register</Link></li>
                    </>
                ) : (
                    <li className='d-inline-block me-4 '>
                        <button 
                            onClick={handleLogout} 
                            className='btn btn-danger btn-sm'
                            style={{ cursor: 'pointer' }}
                        >
                            Logout
                        </button>
                    </li>
                )}
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/props">Props</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/practice">Context</Link></li>
                <li className='d-inline-block me-4 '><Link className='text-dark text-decoration-none' to="/not-found">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar