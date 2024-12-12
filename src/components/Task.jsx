
export default function Task({task}) {
  return (
    <div
      style={{
        display: "flex",
      }}>
      <input type="checkbox" checked={task.completed} />
      <p>{task.text}</p>
      <button>remove</button>
    </div>
  )
}
