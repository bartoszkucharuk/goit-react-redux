import { useSelector } from 'react-redux'
import Task from './Task';

export default function TaskList() {

    const initialTasks = useSelector((state) => state.tasks); // state.nameInsideInitialState inside taskReducer.js

    return (
        <div>
            {initialTasks.map(task =>
                <Task key={task.id} task={task} />)}
        </div> //props "task" send to Task.jsx
  )
}
