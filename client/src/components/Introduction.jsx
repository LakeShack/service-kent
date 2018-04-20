import React from 'react';
import style from './styles/introduction.css';
import StarRatings from 'react-star-ratings';

var Introduction = (props) => {
  let location = '';
  if (props.image.location) {
    location = (props.image.location).toUpperCase();
  }

  return (
    <div className={style.introduction}>
      <div><img src='https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Screen+Shot+2018-04-16+at+12.04.15+PM.png' className={style.logo} /></div>
      <div className={style.text_title}> ENTIRE APARTMENT IN {location}</div>
      <div className={style.rating}> <StarRatings
        rating={props.image.rating}
        starRatedColor='rgb(187, 48, 118)'
        starDimension="15px"
        starSpacing="1px"
      /> {props.image.reviewCount}</div>
      <div className={style.text_location}>{props.image.title}</div>
    </div>
  );
};

export default Introduction;


