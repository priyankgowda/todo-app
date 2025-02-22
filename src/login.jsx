import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleLogin() {
        const userDetails = JSON.parse(localStorage.getItem(username));

        if (userDetails && userDetails.password === password) {
            sessionStorage.setItem('currentUser', username);
            navigate('/todo');
        } else {
            setError('Invalid username or password');
        }
    }

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f7f7f7',
            fontFamily: 'Arial, sans-serif',
        },
        formWrapper: {
            padding: '30px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            textAlign: 'center',
            width: '100%',
            maxWidth: '300px',
        },
        heading: {
            marginBottom: '20px',
            fontSize: '2rem',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1rem',
            outline: 'none',
            boxSizing: 'border-box',
        },
        inputFocus: {
            borderColor: '#5c9ded',
        },
        error: {
            color: '#e74c3c',
            fontSize: '0.875rem',
            marginBottom: '10px',
        },
        button: {
            width: '100%',
            padding: '10px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            boxSizing: 'border-box',
        },
        buttonHover: {
            backgroundColor: '#2980b9',
        },
        link: {
            color: '#3498db',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <h2 style={styles.heading}>Login</h2>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    style={styles.input} 
                    onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={styles.input} 
                    onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                    onBlur={(e) => e.target.style.borderColor = '#ccc'}
                />
                {error && <p style={styles.error}>{error}</p>}
                <button 
                    onClick={handleLogin} 
                    style={styles.button} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Login
                </button>
                <p>
                    Don't have an account? <br />
                    <Link to="/Register" style={styles.link}>Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;