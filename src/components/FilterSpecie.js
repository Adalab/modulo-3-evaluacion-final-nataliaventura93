

const FilterSpecie = (props) => {
  const handleInputSpecie = (ev) => {
    props.handleFilter('species', ev.target.value);
  };
  return (
    <label className="label" htmlFor="input">
      Search by specie
      <input
        type="text"
        className="input"
        id="inputName"
        value={props.searchSpecie}
        onInput={handleInputSpecie}
      />
    </label>
  );
};

export default FilterSpecie;
