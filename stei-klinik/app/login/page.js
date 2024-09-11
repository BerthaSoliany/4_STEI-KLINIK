'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import GoogleButton from 'react-google-button';
import { signIn } from 'next-auth/react';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleGoogleLogin = async () => {
        await signIn('google', { callbackUrl: '/home' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            router.push('/home'); 
        } else {
            alert('Failed to login.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-center text-gray-800 text-3xl font-semibold mb-4">Welcome to STEI-Klinik</h1>
                <p className="text-center text-gray-600 mb-8">
                    Do not have an account? <a href="/register" className="text-blue-600 font-medium">Register</a>
                </p>

                <div className="mb-8 flex justify-center">
                    <GoogleButton
                        onClick={handleGoogleLogin} 
                        style={{ backgroundColor: '#11726c', color: '#fff' }}
                    />
                </div>

                <div className="flex items-center mb-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="text-gray-600 px-2 font-medium">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <form onSubmit={handleSubmit}>
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
