import FilterSpecie from './FilterSpecie';
import FilterName from './FilterName';
import '../styles/layout/Form.scss';

const Filters = ({searchName, searchSpecie, handleFilter}) => {
  return (
    <form className="form">
      <FilterName
        searchName={searchName}
        handleFilter={handleFilter}
      />
      <FilterSpecie
        searchSpecie={searchSpecie}
        handleFilter={handleFilter}
      />
    </form>
  );
};

export default Filters;
