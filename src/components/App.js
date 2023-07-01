import '../styles/App.scss';
import getDataFromApi from '../services/Api';
import CharacterList from './CharacterList';
import imageHeader from '../images/RyM2.png';
import { useState, useEffect } from 'react';

function App() {

  const [characterList, setCharacterList] = useState ([]);

  useEffect(() => {
    getDataFromApi()
      .then((cleanData) => {
        setCharacterList(cleanData);
      })
  }, []);

  return (
    <div>
      <header className="header">
        <img src={imageHeader} className="headerImage" alt="Rick y Morty" />
      </header>
      <main className="main">
        <form className="form">
          <label className="label" htmlFor="inputName">
            Busca por nombre
          </label>
          <input type="text" className="inputName" id="inputName" />
        </form>
        <CharacterList characterList={characterList}/>
      </main>
    </div>
  );
}

export default App;
