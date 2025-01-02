import { useDispatch, useSelector } from "react-redux";
import { changeTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector(({ cars }) => cars);

  function handleOnChangeTerm({ target: { value }}) {
    dispatch(changeTerm(value));
  }

  return <div className="list=header">
    <h3 className="title is-3">My Cars</h3>
    <div className="search field is-horizontal"></div>
      <label className="label">Search</label>
      <input
        className="input"
        value={searchTerm}
        onChange={handleOnChangeTerm} 
      />
  </div>
}

export default CarSearch;