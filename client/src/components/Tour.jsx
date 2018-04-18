import React from 'react';
import style from './styles/picture-share-save-tour.css';

var Tour = (props) => {
  return (
    <div><button className={style.tour_button}><img className={style.tour_image} src='https://image.flaticon.com/icons/svg/54/54917.svg'/>TOUR THIS HOME</button></div>
  );
};

export default Tour;

