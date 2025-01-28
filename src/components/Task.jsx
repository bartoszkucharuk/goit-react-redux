import { useDispatch } from "react-redux"
import { removeTask, toggleTask } from "../redux/tasks/taskSlice";
import styles from "./Task.module.css";


export default function Task({ task }) {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeTask(task.id))
  }

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  }
  return (
    <div className={styles.task}>
      <div className={styles.taskContents}>
        <input type="checkbox" checked={task.completed} onChange={handleToggleTask} />
        <p>{task.text}</p>
      </div>
      <button onClick={handleRemove}>remove</button>
    </div>
  )
}
