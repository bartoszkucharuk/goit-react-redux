import Filters from "./Filters";
import NumberOfTasks from "./NumberOfTasks";
import { FaListCheck } from "react-icons/fa6";




export default function TopBar() {
  return (
    <div>
      <h1>My todos list <FaListCheck size="50" /></h1>
      <NumberOfTasks />
      <Filters /> 
    </div>
  )
}