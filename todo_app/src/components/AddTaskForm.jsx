import React from "react";

const AddTaskForm = ({ inputValue, setInputValue, addTask }) => (
    <form onSubmit={addTask}>
        <div>
            <label htmlFor="item">
            </label>
            <input
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                id="item"
            />
        </div>
        <button
            style={{ marginTop: "8px" }}
            className="btn">Add Task</button>
    </form>
)

export default AddTaskForm;
