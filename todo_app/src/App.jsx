import { useState } from "react"
import "./styles.css"

export default function App() {
    // pappa reale
    const [newItem, setNewItem] =  useState("")
    // class is a reserved keyword in React
    return ( 
        <>
            <form className="new-item-form">
                <div className="form-row">
                    {/* Same logic for the for keyword */}
                    <label htmlFor="item">New item</label>
                    <input value={newItem} 
                        onChange={e => setNewItem(e.target.value)}
                        type="text" id="item"></input>
                    <button className="btn">Add</button>
                </div>
            </form>
            <h1>Todo List</h1>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox"/>
                        Item 1
                    </label>
                    <button className="btn btn-danger">Delete</button>
                </li>
                <li>
                    <label>
                        <input type="checkbox"/>
                        Item 2
                    </label>
                    <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
        </>
    )
}
