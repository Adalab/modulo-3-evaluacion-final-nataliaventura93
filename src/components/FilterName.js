const FilterName = (props) => {
  const handleInputName = (ev) => {
    props.handleFilter('name', ev.target.value);
  };

  return (
    <label className="label" htmlFor="input">
      Search by name
      <input
        type="text"
        className="input"
        id="inputName"
        value={props.searchName}
        onInput={handleInputName}
      />
    </label>
  );
};

export default FilterName;
