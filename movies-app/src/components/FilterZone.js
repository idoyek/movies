import debounce from "lodash.debounce";

function FilterZone({ onRatingChange }) {

  const debouncedOnRatingChange = debounce((rating) => {
    onRatingChange(rating);
  }, 500);
  
  return (
    <div>
      <h1>Filter By:</h1>
      <div>
        <label htmlFor="rating">Minimum Rating: </label>
        <input
          type="number"
          id="rating"
          min={1}
          max={10}
          onChange={(e) => debouncedOnRatingChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default FilterZone;
