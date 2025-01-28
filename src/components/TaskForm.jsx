import { useDispatch } from "react-redux";
import { saveTask } from "../redux/tasks/taskSlice";
import styles from "./TaskForm.module.css"


export default function TaskForm() {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { text } = form.elements;
        dispatch(saveTask(text.value));
        form.reset();
    }


  return (
      <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" name="text" placeholder="add your new task" className={styles.input } />
          <button type="submit">Add task</button>
    </form>
  )
}
