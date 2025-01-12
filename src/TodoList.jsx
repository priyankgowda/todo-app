import React, { useState, useEffect } from 'react';
function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        // Get the current user from sessionStorage
        const user = sessionStorage.getItem('currentUser');
        if (user) {
            setCurrentUser(user);
            const userTasks = JSON.parse(localStorage.getItem(user + '_tasks')) || [];
            setTasks(userTasks);
        }
    }, []);

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
            // Save the updated tasks for the current user
            localStorage.setItem(currentUser + '_tasks', JSON.stringify(updatedTasks));
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        // Save the updated tasks for the current user
        localStorage.setItem(currentUser + '_tasks', JSON.stringify(updatedTasks));
    }

    return (<>
        <div className='main'>
        <div className="to-do-list">
            <h1>TO-DO List</h1>
            <div>
                <input type="text" paceholder="Enter a task..." value={newTask}  onChange={handleInputChange} onKeyDown={HandleKeyDown}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
        </div>
        </>
    );
}

export default ToDoList;
