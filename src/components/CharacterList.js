import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const eachCard = props.characterList.map((card, id) => (
    <li key={id} className="listCharacter__card">
      <CharacterCard card={card} />
    </li>
  ));

  return <ul className="listCharacter">{eachCard}</ul>;
};

export default CharacterList;
