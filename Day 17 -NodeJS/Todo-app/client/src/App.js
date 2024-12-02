import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo) return;

    try {
      const response = await axios.post('http://localhost:5000/todos', { text: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
      toast(' New Todo Added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="todo">
      <h1 className='heading'>To-Do List</h1>
      <form onSubmit={addTodo}>
        <input className='input-tag'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />

        <ToastContainer />
        <button className='btn' type="submit">Add</button>
      </form>


      <ul className='list-hover'>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
