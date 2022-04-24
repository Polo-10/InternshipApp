import "../style/PetsCards.css";

import Dog from "../img/dog.png";
import Icon from "../img/Icon.png";

const PetsCards = ({ item, setShowModalEdit, setEditId }) => {
  const handleOpenEdit = () => {
    setShowModalEdit(true);
    setEditId(item.id);
  };

  return (
    <div className="main-card">
      <img src={Dog} alt="" />
      <div className="card-wrapper">
        <div className="card-content">
          <div className="card-details">
            <p className="dog-name">{item.name}</p>
            <p>Kundelek</p>
          </div>
          <img className="icon" src={Icon} alt="" />
        </div>
        <div className="info-contener-dog">
          <div className="contener-dog-item">
            <p className="dog-item-details">{item.age}</p>
            <p className="dog-item-info">Wiek</p>
          </div>
          <div className="contener-dog-item">
            <p className="dog-item-details">{item.color} </p>
            <p className="dog-item-info">Kolor</p>
          </div>
          <div className="contener-dog-item">
            <p className="dog-item-details">{item.weight}</p>
            <p className="dog-item-info">Waga</p>
          </div>
          <div className="contener-dog-item">
            <p className="dog-item-details">{item.isSterilized}</p>
            <p className="dog-item-info">Sterylizacja </p>
          </div>
        </div>
        <div className="edit">
          <button onClick={handleOpenEdit} className="edit-button">
            Edytuj
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetsCards;
