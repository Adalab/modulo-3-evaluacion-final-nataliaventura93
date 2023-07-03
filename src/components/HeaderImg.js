import '../styles/layout/Header.scss';

const HeaderImg = ({imageHeader}) => {
    return (
        <div className="header">
            <img src={imageHeader} className="headerImage" alt="Rick y Morty" />
        </div>
        
    );
}

export default HeaderImg;