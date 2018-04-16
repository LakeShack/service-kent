import React from 'react';
import style from './styles/introduction.css';

var Introduction = (props) => (
  <div className={style.introduction}>
    <p><img src='https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Screen+Shot+2018-04-16+at+12.04.15+PM.png' className={style.logo}/></p>  
    <p className={style.text}>{props.image.title}</p>
    <p className={style.text}> Entire Apartment in {props.image.location}</p>
  </div>
);

export default Introduction;

