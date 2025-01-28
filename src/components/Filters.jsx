import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../redux/filters/selectors"
import { FILTERS } from "../redux/filters/consts";
import { changeStatusFilter } from "../redux/filters/filterSlice";
import styles from "./Filters.module.css";


export default function Filters() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleClick = (filter) => {
    dispatch(changeStatusFilter(filter));
  };
  return (
    <div className={styles.filters}>
      <p className={styles.p}>Filters: </p>
      <div className={styles.filterButtons}>
        <button onClick={() => handleClick(FILTERS.ALL)}
          style={{ background: filter === FILTERS.ALL && "grey", }}>All</button>
        <button onClick={() => handleClick(FILTERS.ACTIVE)}
          style={{ background: filter === FILTERS.ACTIVE && "grey", }}>Active</button>
        <button onClick={() => handleClick(FILTERS.COMPLETED)}
          style={{ background: filter === FILTERS.COMPLETED && "grey", }}>Completed</button>
      </div>
    </div>
  )
}
