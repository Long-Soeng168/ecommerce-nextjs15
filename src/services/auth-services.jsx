const baseUrl = (process.env.BASE_API_URL || 'http://127.0.0.1:8000/api');

export const authLogin = async (email, password, setErrors, setLoading) => {
    const validateForm = (email, password) => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        return errors;
    };

    // Reset errors and enable loading
    setErrors({});
    setLoading(true);

    // Basic form validation
    const formErrors = validateForm(email, password);
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        setLoading(false);
        return { success: false };
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
            const errorMessage = data.message || `Error ${response.status}: ${response.statusText}`;
            setErrors({ general: errorMessage });
            return { success: false };
        }

        // Successful login
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        return { success: true, user: data.user };
    } catch (error) {
        setErrors({ general: 'An unexpected error occurred, please try again later.' });
        return { success: false };
    } finally {
        setLoading(false);
    }
};
