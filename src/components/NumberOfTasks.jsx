import { useSelector } from "react-redux"
import { selectTasks } from "../redux/selectors";

export default function NumberOfTasks() {
    const tasks = useSelector(selectTasks);
    const completed = tasks.filter(task => task.completed).length;
    const active = tasks.filter(task => !task.completed).length;
    return (
    <div>
        <p>Completed: {completed}</p>
        <p>Active: {active}</p>
    </div>
    )
}
