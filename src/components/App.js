import '../styles/App.scss';
import getDataFromApi from '../services/Api';
import LS from '../services/LocalStorage';
import CharacterList from './CharacterList';
import Filters from './Filters';
import imageHeader from '../images/RyM2.png';
import { useState, useEffect } from 'react';

function App() {

  const [characterList, setCharacterList] = useState (LS.get('characters', []));

  const [searchName, setSearchName] = useState ('');
  const [searchSpecie, setSearchSpecie] = useState('');

  useEffect(() => {
    getDataFromApi()
      .then((cleanData) => {
        setCharacterList(cleanData);
        LS.set('characters', cleanData);
      })
  }, []);

  const handleFilter = (varName, varValue) => {
    if(varName === 'name'){
      setSearchName(varValue)
    } else if (varName === 'species'){
      setSearchSpecie(varValue)
    }
    
  }

  const filteredCharacters = characterList.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(searchName.toLowerCase()))
  .filter((eachCharacter) => eachCharacter.species.toLowerCase().includes(searchSpecie.toLowerCase()));

  return (
    <div>
      <header className="header">
        <img src={imageHeader} className="headerImage" alt="Rick y Morty" />
      </header>
      <main className="main">
        <Filters searchName={searchName} searchSpecie={searchSpecie} handleFilter={handleFilter}/>
        <CharacterList characterList={filteredCharacters}/>
      </main>
    </div>
  );
}

export default App;
