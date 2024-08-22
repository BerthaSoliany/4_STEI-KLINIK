'use client';

import { useState, FormEvent } from 'react';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });

        if (response.ok) {
            alert('Registration successful!');
        } else {
            alert('Failed to register.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-center text-gray-600 text-2xl font-semibold mb-6">Welcome to STEI-Klinik</h1>
                <p className="text-center text-gray-500 mb-6">
                    Have an account? <a href="#" className="text-blue-600">login</a>
                </p>
                
                <button className="flex items-center justify-center w-full py-2 mb-4 border border-gray-300 rounded-lg text-gray-600">
                    <img
                        src="/google-logo.png" 
                        alt="Google Logo"
                        className="w-6 h-auto mr-3"
                    />
                    Continue with Google
                </button>

                <div className="flex items-center mb-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-gray-500 px-2">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => {
                                console.log('First Name:', e.target.value); 
                                setFirstName(e.target.value);
                            }}
                            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-gray-600"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => {
                                console.log('Last Name:', e.target.value); 
                                setLastName(e.target.value);
                            }}
                            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-gray-600"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-gray-500 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => {
                                console.log('Email:', e.target.value); 
                                setEmail(e.target.value);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-600"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {
                                console.log('Password:', e.target.value); 
                                setPassword(e.target.value);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-600"
                        />
                    </div>

                    <button className="w-full py-2 bg-gray-400 text-white rounded-lg">
                        Continue with email
                    </button>
                </form>
            </div>
        </div>
    );
}
