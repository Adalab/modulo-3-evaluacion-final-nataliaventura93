import CharacterCard from './CharacterCard';
import '../styles/layout/ListCharacter.scss';

const CharacterList = ({characterList}) => {
  const eachCard = characterList.map((card, id) => (
    <li key={id} className="listCharacter__card">
      {<CharacterCard card={card} />}
    </li>
  ));

  return <ul className="listCharacter">{eachCard}</ul>;
};

export default CharacterList;
