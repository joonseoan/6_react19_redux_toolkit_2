import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { data } = useSelector(({ cars }) => cars);

  const renderedCars = data.map(({ name, cost, id }) => <div className="panel" key={id}>
    <p>
      {name} - ${cost}
    </p>
    <button className="button is-danger" onClick={() => dispatch(removeCar(id))}>
      Delete
    </button>
  </div>);

  return <div className="car-list">
    {renderedCars}
    <hr />
  </div>
}

export default CarList;