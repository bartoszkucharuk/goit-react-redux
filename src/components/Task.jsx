import { useDispatch } from "react-redux"
import { removeTask, toggleTaskStatus } from "../redux/actions";

export default function Task({ task }) {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeTask(task.id))
  }

  const toggleTask = () => {
    dispatch(toggleTaskStatus(task.id));
  }
  return (
    <div
      style={{
        display: "flex",
      }}>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      <p>{task.text}</p>
      <button onClick={handleRemove}>remove</button>
    </div>
  )
}
