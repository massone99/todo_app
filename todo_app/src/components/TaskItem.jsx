export function TaskItem({task}) {
    return <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)} />
        <span style={{
            margin: '8px'
        }}>{task.text}</span>
        <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
}
