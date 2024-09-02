import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid library
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

function App() {
  // State to hold the list of tasks, each task is an object with id, text, and completed status
  const [tasks, setTasks] = useState([]);
  // State to hold the current input value
  const [inputTask, setInputValue] = useState('');

  // Handler for adding new tasks
  const addTask = (e) => {
    e.preventDefault()
    if (inputTask.trim()) {  // Ensure the input is not empty
      const newTask = {
        id: uuidv4(),  // Generate a unique ID for the task using uuid
        text: inputTask,   // Task text
        completed: false  // Initialize as not completed
      };
      setTasks([...tasks, newTask]);  // Add new task to the tasks array
      setInputValue('');  // Clear the input field
    }
  };

  // Handler for toggling task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );  // Toggle the completed status of the task
    setTasks(updatedTasks);  // Update the tasks array
  };

  // Handler for removing tasks
  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);  // Filter out the task with the matching id
    setTasks(newTasks);  // Update the tasks array
  };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Simple Todo List</h1>
            <AddTaskForm setInputValue={setInputValue} addTask={addTask} inputValue={inputTask}></AddTaskForm>
            <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask}></TaskList> 
        </div>
    );

}

export default App;
