import Filters from "./Filters";
import NumberOfTasks from "./NumberOfTasks";


export default function TopBar() {
  return (
    <div>
          <NumberOfTasks />
          <hr />
          <Filters /> 
    </div>
  )
}
