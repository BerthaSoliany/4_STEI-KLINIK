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
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-center text-gray-800 text-3xl font-semibold mb-4">Welcome to STEI-Klinik</h1>
                <p className="text-center text-gray-600 mb-8">
                    Have an account? <a href="/login" className="text-blue-600 font-medium">login</a>
                </p>

                <button className="flex items-center justify-center w-full py-3 mb-4 border border-gray-300 rounded-lg text-gray-800 font-medium">
                    <img
                        src="/google-logo.png"
                        alt="Google Logo"
                        className="w-5 h-5 mr-3"
                    />
                    Continue with Google
                </button>

                <div className="flex items-center mb-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-gray-600 px-2 font-medium">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-800"
                        />
                    </div>

                    <button className="w-full py-3 bg-[#11726c] text-white font-medium rounded-lg">
                        Continue with email
                    </button>
                </form>
            </div>
        </div>
    );
}
