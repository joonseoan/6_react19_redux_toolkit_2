import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, reset } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  // To prevent the unnecessary rendering because it renders the new reference of the object and array.
  // const { name, cost } = useSelector((state) => {
  //   return {
  //     name: state.form.name,
  //     cost: state.form.cost,
  //   };
  // });

  // no new reference
  // It not the itself to the new object however, if it has the third property
  // ans the third property changes, it can rerender. So primitive value is better.
  // const { name, cost } = useSelector(({ form }) => form); 

  // no new reference
  // it is implementing multiple useSelector, but there is not possibility to rerender again
  // when the the third property exists.
  const name = useSelector(({ form: { name } }) => name);
  const cost = useSelector(({ form: { cost } }) => cost);

  // In a more complicated scenario
  // const selectName = createSelector([selectForm], (form) => form.name);
  // const selectCost = createSelector([selectForm], (form) => form.cost);

  // const name = useSelector(selectName);
  // const cost = useSelector(selectCost);

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