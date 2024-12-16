import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TopBar from './components/TopBar'

function App() {

  return (
    <>
      <TopBar />
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
