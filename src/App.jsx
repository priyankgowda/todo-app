import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './login';
import ToDoList from './TodoList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;