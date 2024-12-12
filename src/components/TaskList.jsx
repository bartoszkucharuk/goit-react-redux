import { useSelector } from 'react-redux'
import Task from './Task';
import { selectTasks } from '../redux/selectors';

export default function TaskList() {

    const initialTasks = useSelector(selectTasks); 

    return (
        <div>
            {initialTasks.map(task =>
                <Task key={task.id} task={task} />)}
        </div> //props "task" send to Task.jsx
  )
}
