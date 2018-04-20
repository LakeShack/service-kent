import React from 'react';
import style from './styles/list-view.css';

var TourView = (props) => {
  return (
    <div className={style.list_view}>
      <div className={style.content}>
        <img src={props.images.living_room} className={style.picture} />
        <p className={style.room_text}>Living area</p>

        <img src={props.images.dining_room} className={style.picture} />
        <p className={style.room_text}>Dining area</p>

        <img src={props.images.bedroom} className={style.picture} />
        <p className={style.room_text}>Bedroom area</p>

        <img src={props.images.den} className={style.picture} />
        <p className={style.room_text}>Den</p>
      </div>
    </div>
  );
};

export default TourView;