import { useSelector } from 'react-redux'
import Task from './Task';
import { selectTasks } from '../redux/tasks/selectors';
import { selectFilter } from '../redux/filters/selectors';
import { FILTERS } from '../redux/filters/consts';

export default function TaskList() {

    const tasks = useSelector(selectTasks); 
    const filter = useSelector(selectFilter);

    const filteredTasks = () => {
        switch (filter) {
            case FILTERS.ALL:
                return tasks;
            case FILTERS.COMPLETED:
                return tasks.filter((task) => task.completed);
            case FILTERS.ACTIVE:
                return tasks.filter((task) => !task.completed);
            default:
                return [];
        }
    };

    return (
        <div>
            {filteredTasks().map((task) =>
                <Task key={task.id} task={task} />)}
        </div> //props "task" send to Task.jsx
  )
}
