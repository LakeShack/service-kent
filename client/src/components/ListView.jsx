import React from 'react';
import style from './styles/list-view.css';

var TourView = (props) => {

  const roomArr = [['Living area', 'living_room'], ['Dining area', 'dining_room'], ['Bedroom area', 'bedroom'], ['Den', 'den']];

  const renderRooms = roomArr.map((room) => {
    return (<div key={room[0]}>
      <img src={props.images[room[1]]} className={style.picture} />
      <p className={style.room_text}>{room[0]}</p>
    </div>);
  });


  return (
    <div className={style.list_view}>
      <div className={style.content}>
        {renderRooms}
      </div>
    </div>
  );
};

export default TourView;