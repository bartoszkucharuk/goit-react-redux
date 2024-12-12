
export default function Task({task}) {
  return (
    <div>
      <input type="checkbox" />
      <p>{task.id} {task.text}</p>
      <button>remove</button>
    </div>
  )
}
