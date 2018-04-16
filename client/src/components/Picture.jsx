import React from 'react';
import style from './styles/picture.css';


var Picture = (props) => (
  <div className={style.container}>
    <span><img src={props.image.image.living_room} className={style.picture}/></span>
  </div>
);

export default Picture;