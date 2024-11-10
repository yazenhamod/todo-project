import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";

// CSS
import './register.css';

// Services
// import { handleRegistration } from '../../Services/authenticationService';

// Main Function
function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // Navigation Handle
    // const navigate = useNavigate();

    const handleRegister = async (e) => {
        // e.preventDefault();

        // let data = {
        //     email: email,
        //     username: username,
        //     password: password
        // };

        // try {
        //     let response = await handleRegistration(data);
            
        //     if (response === 400) {
        //         console.log('Email or Username already in use.');
        //     } else {
        //         console.log(response);
        //     }
        //     // navigate('/login')


        // } catch (err) {
        //     console.log("Registration failed:", err.response);
        // }
    }

    return (
        <form className='register-form-wrapper' onSubmit={handleRegister}>
            <span className='form-title'> Register </span>

            <div className='register-form-input'>
                <span> Email: </span>

                <input className='register-form-input-value' placeholder='example@gmail.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='register-form-input'>
                <span> Username: </span>

                <input className='register-form-input-value' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className='register-form-input'>
                <span> Password: </span>

                <input className='register-form-input-value' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className='register-form-submit-button' type='submit'> Register </button>
        </form>

    )
}

export default Register;