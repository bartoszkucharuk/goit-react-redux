import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../redux/filters/selectors"
import { FILTERS } from "../redux/filters/consts";
import { changeFilter } from "../redux/filters/actions";

export default function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleClick = (filter) => {
    dispatch(changeFilter(filter));
  };
  return (
    <div>
          Filters:
      <button onClick={() => handleClick(FILTERS.ALL)}
        style={{ background: filter === FILTERS.ALL && "grey", }}>All</button>
      <button onClick={() => handleClick(FILTERS.ACTIVE)}
        style={{ background: filter === FILTERS.ACTIVE && "grey", }}>Active</button>
      <button onClick={() => handleClick(FILTERS.COMPLETED)}
        style={{ background: filter === FILTERS.COMPLETED && "grey", }}>Completed</button>
          <hr />
    </div>
  )
}
