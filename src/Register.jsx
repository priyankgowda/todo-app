import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handleRegister() {
        if (localStorage.getItem(username)) {
            setError('Username already exists.');
            return;
        }

        const userDetails = { username, password };
        localStorage.setItem(username, JSON.stringify(userDetails));
        navigate('/login');
    }

    const styles = {
        body: {
            backgroundColor: 'white',
        },
        registerContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
            marginTop: '170px',
        },
        heading: {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            fontSize: '16px',
            boxSizing: 'border-box',
        },
        inputFocus: {
            outline: 'none',
            borderColor: '#4CAF50',
        },
        button: {
            width: '100%',
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
        error: {
            color: 'red',
            fontSize: '14px',
            marginBottom: '10px',
            textAlign: 'center',
        },
        paragraph: {
            textAlign: 'center',
            marginTop: '15px',
        },
        link: {
            color: '#4CAF50',
            textDecoration: 'none',
        },
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <div style={styles.registerContainer}>
            <h2 style={styles.heading}>Register</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                style={styles.input} 
                onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                style={styles.input} 
                onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
            />
            {error && <p style={styles.error}>{error}</p>}
            <button 
                onClick={handleRegister} 
                style={styles.button} 
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
                Register
            </button>
            <p style={styles.paragraph}>
                Already registered? <a href="/login" style={styles.link}>Login here</a>
            </p>
        </div>
    );
}

export default Register;