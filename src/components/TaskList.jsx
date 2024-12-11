import { useSelector } from "react-redux";
import Task from "./Task";
import { selectTask } from "../redux/selectors";

export default function TaskList() {
    const exampleTasks = useSelector(selectTask);

    return (
        <div>
            {exampleTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}
