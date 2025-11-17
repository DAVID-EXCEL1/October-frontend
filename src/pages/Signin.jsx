import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();

        const userData = { email, password };

        axios.post('http://localhost:5000/user/login', userData)
            .then((res) => {
                console.log("Response:", res.data);
                
                // ✅ Save token to localStorage
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token);
                    console.log("Token saved:", res.data.token);
                }
                
                // ✅ Save user data if available
                if (res.data.user) {
                    localStorage.setItem('user', JSON.stringify(res.data.user));
                }
                
                alert("Login successful!");

                // ✅ Redirect to dashboard or home
                navigate('/dashboard');
            })
            .catch((err) => {
                console.error("Error:", err.response ? err.response.data : err);
                alert("Invalid email or password, try again.");
            });
    };


    return (
        <StyledWrapper>
            <form className="form" onSubmit={handleSignin}>
                <h1 className='text-center'>Sign In</h1>

                <div className="flex-column">
                    <label>Email </label>
                </div>
                <div className="inputForm">
                    <input
                        placeholder="Enter your Email"
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="flex-column">
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <input
                        placeholder="Enter your Password"
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="button-submit" type="submit">Sign In</button>

                <p className="p">
                    Don't have an account? <Link to="/signup"><span className="span">Sign Up</span></Link>
                </p>
            </form>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    margin: 40px auto;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .form button {
    align-self: flex-end;
    }

    .flex-column > label {
    color: #151717;
    font-weight: 600;
    }

    .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
    }

    .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 100%;
    height: 100%;
    }

    .input:focus {
    outline: none;
    }

    .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
    }

    .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    }

    .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
    }

    .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
    }

    .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
    }

    .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
    }

    .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    }

    .btn:hover {
    border: 1px solid #2d79f3;
    ;
    }`;

export default Signin;
