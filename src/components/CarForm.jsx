import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, reset } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(({ form }) => form);

  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    dispatch(reset());
  };

  return <div className="car-form panel">
    <h4 className="subtitle is-3">Add Car</h4>
    <form onSubmit={handleOnSubmit}>
      <div className="field-group">
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input is-expanded"
            value={name}
            onChange={(event) => dispatch(changeName(event.target.value))}
          />
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <input
            className="input is-expanded"
            type="number"
            value={cost || ''}
            onChange={(event) => dispatch(changeCost(+event.target.value))}
          />
        </div>
        <div className="field">
          <button className="button is-link" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>;
}

export default CarForm;