import { TaskItem } from "./TaskItem";

const TaskList = ({tasks, toggleTaskCompletion, removeTask}) => (
    <ul>
        {tasks.map((task) => (
            <TaskItem task={task}></TaskItem> 
        ))}
    </ul>
)

export default TaskList;
