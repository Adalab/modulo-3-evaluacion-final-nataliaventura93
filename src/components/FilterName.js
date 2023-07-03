const FilterName = ({handleFilter, searchName}) => {
  const handleInputName = (ev) => {
    handleFilter('name', ev.target.value);
  };

  return (
    <label className="label" htmlFor="input">
      Search by name
      <input
        type="text"
        className="input"
        id="inputName"
        value={searchName}
        onInput={handleInputName}
      />
    </label>
  );
};

export default FilterName;
