import "./styles.css"

export default function App() {
    // class is a reserved keyword in React
    return <form className="new-item-form">
        <div className="form-row">
        {/* Same logic for the for keyword */}
            <label htmlFor="item">New item</label>
            <input type="text" id="item"></input>
        </div>
    </form>
}
