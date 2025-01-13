import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        if (!user) {
            // Redirect to login if no user is logged in
            navigate('/login');
            return;
        }
        setCurrentUser(user);
        const userTasks = JSON.parse(localStorage.getItem(user + '_tasks')) || [];
        setTasks(userTasks);
    }, [navigate]);

    // Add logout function
    const handleLogout = () => {
        sessionStorage.removeItem('currentUser');
        navigate('/login');
    };

    // ... rest of your existing code ...

    return (
        <>
            <div className='main'>
                <div className="to-do-list">
                    <h1>TO-DO List</h1>
                    <button 
                        onClick={handleLogout}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            padding: '8px 16px',
                            backgroundColor: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Logout
                    </button>
                    {/* ... rest of your existing JSX ... */}
                </div>
            </div>
        </>
    );
}

export default ToDoList;