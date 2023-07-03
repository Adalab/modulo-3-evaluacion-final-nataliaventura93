

const FilterSpecie = ({handleFilter, searchSpecie}) => {
  const handleInputSpecie = (ev) => {
    handleFilter('species', ev.target.value);
  };
  return (
    <label className="label" htmlFor="input">
      Search by specie
      <input
        type="text"
        className="input"
        id="inputName"
        value={searchSpecie}
        onInput={handleInputSpecie}
      />
    </label>
  );
};

export default FilterSpecie;
