import { Fragment } from 'react';

const characterCard = ({card}) => {
  return (
    <Fragment>
      <img
        className="listCharacter__card--img"
        src={card.photo}
        alt={`Foto de ${card.name}`}
      />
      <span className="listCharacter__card--name">{card.name}</span>
      <span className="listCharacter__card--specie">{card.species}</span>
    </Fragment>
  );
};

export default characterCard;
