export default function Task({ task }) {
  return (
    <div>
      <input type="checkbox" />
      <p>{task.text}</p>
      <button>Remove</button>
    </div>
  )
}
