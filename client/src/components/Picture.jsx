import React from 'react';
import Save from './Save.jsx';
import Share from './Share.jsx';
import Tour from './Tour.jsx';
import style from './styles/picture-share-save-tour.css';


var Picture = (props) => (

  <div className={style.container} >
    <span><img src={props.home.image.living_room} className={style.picture}/></span>
    <Save home={props.home}/>
    <Share home={props.home}/>
    <Tour home={props.home} handlepageviewclick={props.handlepageviewclick} tourview={props.tourview}/>   
  </div>
  
);

export default Picture;