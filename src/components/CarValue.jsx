import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
    const searchedCars = data.filter(
      ({ name }) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );

    const cost = searchedCars.reduce((initValue, comulative) => {
      return initValue + comulative.cost
    }, 0);

    return cost;
  })

  return <div className="car-value">
    Total Cost: ${totalCost}
  </div>
}

export default CarValue;