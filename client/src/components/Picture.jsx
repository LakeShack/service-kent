import React from 'react';
import Save from './Save.jsx';
import Share from './Share.jsx';
import Tour from './Tour.jsx';
import style from './styles/picture-share-save-tour.css';


var Picture = (props) => (

  <div className={style.container} >
    <span><img src={props.home.image.living_room} className={style.picture}/></span>
    <Save home={props.home} handleSaveClick={props.handleSaveClick}/>
    <Share home={props.home} handleShareClick={props.handleShareClick}/>
    <Tour home={props.home} handlePageViewClick={props.handlePageViewClick} tourView={props.tourView}/>   
  </div>
  
);

export default Picture;