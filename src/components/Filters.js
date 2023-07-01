import FilterSpecie from './FilterSpecie';
import FilterName from './FilterName';

const Filters = (props) => {
  return (
    <form className="form">
      <FilterName
        searchName={props.searchName}
        handleFilter={props.handleFilter}
      />
      <FilterSpecie
        searchSpecie={props.searchSpecie}
        handleFilter={props.handleFilter}
      />
    </form>
  );
};

export default Filters;