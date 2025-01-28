import { useSelector } from "react-redux"
import { selectTasks } from "../redux/tasks/selectors";
import styles from "./NumberOfTasks.module.css";

export default function NumberOfTasks() {
    const tasks = useSelector(selectTasks);
    const completed = tasks.filter(task => task.completed).length;
    const active = tasks.filter(task => !task.completed).length;
    return (
    <div>
        <p className={styles.completedTasks}>Completed tasks: {completed}</p>
        <p className={styles.activeTasks}>Active: {active}</p>
    </div>
    )
}
