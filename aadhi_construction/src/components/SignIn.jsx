import React, { useState } from 'react';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import constructionImage from '../assets/construction-silhouette.jpg';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const navigate = useNavigate();

    // Fetch backend URL from .env
    // const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
    const apiUrl = 'http://127.0.0.1:8000';

    const handleChange = (e) => {
        console.log(`${e.target.name}: ${e.target.value}`);
        // console.log(newLocal)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/users/login`, formData);
            if (response.status === 200) {
                setSnackbar({ open: true, message: 'Welcome to the Builders Community! Sign in successful!', severity: 'success' });
                navigate('/dashboard');
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Oops! Invalid email or password. Please try again.', severity: 'error' });
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <div className="flex">
            {/* Full-page image section */}
            <div className="hidden lg:block lg:w-2/3 relative">
                <img
                    src={constructionImage}
                    alt="Construction"
                    className="h-screen w-full object-cover"
                />
            </div>
            {/* Sign-in form section */}
            <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/3">
                <h1 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign In</h1>
                <p className="text-center text-gray-500 mb-6">
                    Join the community of builders and create something amazing!
                </p>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        className="mb-4 w-full me-2"
                        required
                        label="Email"
                        name="username" 
                        type="email"
                        value={formData.username}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        className="mb-4 w-full me-2"
                        required
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="bg-blue-600 hover:bg-blue-700">
                        Sign In
                    </Button>
                    
                    <div className="me-2 space-x-0">
                        <p>
                            <Link to="/signup" className="text-blue-500 hover:underline">Sign up?</Link>
                        </p>
                    </div>

                    
                </form>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default SignIn;
