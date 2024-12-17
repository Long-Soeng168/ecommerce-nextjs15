'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

// Helper function for validating email and password
const validateForm = (email, password) => {
    const errors = {};
    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'Password is required.';
    return errors;
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [baseUrl, setBaseUrl] = useState('');
    const router = useRouter();

    useEffect(() => {
        setBaseUrl(process.env.BASE_API_URL || 'http://127.0.0.1:8000/api');
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // Basic form validation
        const formErrors = validateForm(email, password);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle server-side errors more gracefully
                const errorMessage = data.message || `Error ${response.status}: ${response.statusText}`;
                setErrors({ general: errorMessage });
                return;
            }

            // Successful login, store token and redirect
            localStorage.setItem('token', data.token); 
            localStorage.setItem('user', JSON.stringify(data.user));
            router.push('/admin/dashboard');
        } catch (error) {
            setErrors({ general: 'An unexpected error occurred, please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto login-container">
            <h1 className="mb-4 text-2xl font-semibold">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <div className="form-group">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="emailHelp"
                        className="input"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-describedby="passwordHelp"
                        className="input"
                    />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-500'} text-white py-2 rounded-md`}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
            </form>

            {errors.general && (
                <div className="mt-4 text-red-500">
                    <p className="text-sm">{errors.general}</p>
                </div>
            )}
        </div>
    );
};

export default Login;
