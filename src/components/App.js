import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useLocation, matchPath} from 'react-router';

import '../styles/App.scss';
import getDataFromApi from '../services/Api';
import LS from '../services/LocalStorage';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters';
import imageHeader from '../images/RyM2.png';
import HeaderImg from './HeaderImg';

function App() {
  const [characterList, setCharacterList] = useState(LS.get('characters', []));
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('');

  useEffect(() => {
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
      LS.set('characters', cleanData);
    });
  }, []);

  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchName(varValue);
    } else if (varName === 'species') {
      setSearchSpecie(varValue);
    }
  };

  const filteredCharacters = characterList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.species.toLowerCase().includes(searchSpecie.toLowerCase())
    );

  
  const {pathname} = useLocation();

  const routeData = matchPath('/characterCard/:cardId', pathname);

  const cardId= routeData?.params.cardId;


  const cardData = characterList.find((card) => card.id === parseInt(cardId));

  return (
    <div>
      <header>
        <HeaderImg imageHeader={imageHeader} />
      </header>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  searchName={searchName}
                  searchSpecie={searchSpecie}
                  handleFilter={handleFilter}
                />
                <CharacterList characterList={filteredCharacters} />
              </>
            }
          />

          <Route path="/characterCard/:cardId" element={<CharacterDetail cardData={cardData}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
