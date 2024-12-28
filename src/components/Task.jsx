import { useDispatch } from "react-redux"
import { removeTask, toggleTask } from "../redux/tasks/taskSlice";


export default function Task({ task }) {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeTask(task.id))
  }

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  }
  return (
    <div
      style={{
        display: "flex",
      }}>
      <input type="checkbox" checked={task.completed} onChange={handleToggleTask} />
      <p>{task.text}</p>
      <button onClick={handleRemove}>remove</button>
    </div>
  )
}
