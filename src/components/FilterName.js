const FilterName = ({handleFilter, searchName}) => {
  const handleInputName = (ev) => {
    handleFilter('name', ev.target.value);
  };

  return (
    <div>
    <label className="label" htmlFor="inputSpecie">Search by name</label>
      
      <input
        type="text"
        className="input"
        id="inputSpecie"
        value={searchName}
        onInput={handleInputName}
      />
    </div>
  );
};

export default FilterName;
