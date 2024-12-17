import { useDispatch } from "react-redux";
import { saveTask } from "../redux/tasks/actions";


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
      <form onSubmit={handleSubmit}>
          <input type="text" name="text" />
          <button type="submit">Add task</button>
    </form>
  )
}
