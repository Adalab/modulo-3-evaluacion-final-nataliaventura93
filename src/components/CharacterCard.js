import { Fragment } from 'react';

const characterCard = (props) => {
  return (
    <Fragment>
      <img
        className="listCharacter__card--img"
        src={props.card.photo}
        alt={`Foto de ${props.card.name}`}
      />
      <span className="listCharacter__card--name">{props.card.name}</span>
      <span className="listCharacter__card--specie">{props.card.species}</span>
    </Fragment>
  );
};

export default characterCard;
