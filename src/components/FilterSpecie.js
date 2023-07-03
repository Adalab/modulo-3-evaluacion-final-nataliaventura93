

const FilterSpecie = ({handleFilter, searchSpecie}) => {
  const handleInputSpecie = (ev) => {
    handleFilter('species', ev.target.value);
  };
  return (
    <div>
    <label className="label" htmlFor="inputName">Search by specie</label>
      <input
        type="text"
        className="input"
        id="inputName"
        value={searchSpecie}
        onInput={handleInputSpecie}
      />
    </div>
  );
};

export default FilterSpecie;
