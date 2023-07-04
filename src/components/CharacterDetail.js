import { Link } from 'react-router-dom';
import '../styles/layout/CharacterDetail.scss';

const CharacterDetail = ({ cardData }) => {
  return (
    <div>
      <Link to="/"><i className="fa-solid fa-backward backLink"> Back</i></Link>
      <section className="character__detail">
        {
          <img
            className="character__detail--img"
            src={cardData.photo}
            alt={`Foto de ${cardData.name}`}
          />
        }
        <div className="character__detail--info">
          <h2 className="character__detail--infoName">{cardData.name}</h2>
          <p>Status: {cardData.status}</p>
          <p>Species: {cardData.species}</p>
          <p>Origin: {cardData.origin}</p>
          {<p>Episodes: {cardData.episodes}</p>}
        </div>
      </section>
    </div>
  );
};

export default CharacterDetail;
