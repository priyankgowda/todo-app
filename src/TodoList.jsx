import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const navigate = useNavigate();

    const logoutButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        padding: '8px 16px',
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    };

    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        if (!user) {
            navigate('/login');
            return;
        }
        setCurrentUser(user);
        const userTasks = JSON.parse(localStorage.getItem(user + '_tasks')) || [];
        setTasks(userTasks);
    }, [navigate]);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function HandleKeyDown(event) { 
        if (event.key === 'Enter') {
            addTask();
        }
    }

    function addTask() {
        if (newTask.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            localStorage.setItem(currentUser + '_tasks', JSON.stringify(updatedTasks));
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem(currentUser + '_tasks', JSON.stringify(updatedTasks));
    }

    const handleLogout = () => {
        sessionStorage.removeItem('currentUser');
        navigate('/login');
    };

    return (
        <div className='main'>
            <div className="to-do-list">
                <h1>TO-DO List</h1>
                <button 
                    onClick={handleLogout} 
                    style={logoutButtonStyle}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#ff0000';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#ff4444';
                    }}
                >
                    Logout
                </button>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a task..." 
                        value={newTask}  
                        onChange={handleInputChange} 
                        onKeyDown={HandleKeyDown}
                    />
                    <button className='add-button' onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span>{task}</span>
                            <button 
                                className='delete-button' 
                                onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList;