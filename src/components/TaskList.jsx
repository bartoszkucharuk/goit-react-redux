import { useSelector } from "react-redux";
import Task from "./Task";

export default function TaskList() {
    const exampleTasks = useSelector((state) => state.task);

    return (
        <div>
            {exampleTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}
