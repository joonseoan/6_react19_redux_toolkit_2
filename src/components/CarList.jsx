import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) => {
    return data.filter(({ name }) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
  },
)

function CarList() {
  const dispatch = useDispatch();
  const data = useSelector(memoizedCars);
  const formName = useSelector(({ form: { name }}) => name);

  const renderedCars = data.map(({ name, cost, id }) => {
    const bold = formName && name.toLowerCase().includes(formName.toLowerCase());
    
    return <div className={`panel ${bold && 'bold'}`} key={id}>
      <p>
        {name} - ${cost}
      </p>
      <button className="button is-danger" onClick={() => dispatch(removeCar(id))}>
        Delete
      </button>
    </div>
  });

  return <div className="car-list">
    {renderedCars}
    <hr />
  </div>
}

export default CarList;