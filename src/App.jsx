import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Login from './login';
import ToDoList from './TodoList';

function App() {
    return (
        <Router basename="/todo-app">
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/" element={<Login />} /> {/* Default route */}
            </Routes>
        </Router>
    );
}

export default App;
