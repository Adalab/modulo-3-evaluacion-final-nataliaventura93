import { Link } from 'react-router-dom';

const CharacterCard = ({ card }) => {
  return (
    <Link to={'/characterCard/' + card.id}>
      <img
        className="listCharacter__card--img"
        src={card.photo}
        alt={`Foto de ${card.name}`}
      />
      <p className="listCharacter__card--name">{card.name}</p>
      <p className="listCharacter__card--specie">{card.species}</p>
    </Link>
  );
};

export default CharacterCard;
