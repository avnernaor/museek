// src/components/SignUp.js
import React, { useState } from 'react';
import { signUp } from '../auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            alert('User signed up successfully');
        } catch (error) {
            console.error('Error signing up: ', error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
