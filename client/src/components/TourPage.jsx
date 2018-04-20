import React from 'react';
import style from './styles/tour-page.css';

var TourPage = (props) => {

  const arrowImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG5SURBVHhe7d0xSiRBAEbhQVcNnFQFc0HwFCKY6AU2MNpkQ2P1FkamXkHQPcGeQfNNBA+ggat/wQjSFDodVPmQ98FP5fXotGsiSZL0nU1np77Qj+w0+5e9ZPfZWbaYqbOV7DorIYa7yNRRiXGT1WKU/c92MnXwWYy3/crU2Lwxyo4yNTQmxmO2nqmRMTHKfmdqZGyMk0yNGAPEGCDGADEGiDFAjAFiDBBjgBgDxBggxgAxBogxQIwBYgwQY4AYA8QYIMYAMQaIMUCMAWIMEGOAGAPEGCDGADEGiDFAjAFiDBBjgCxnxgA5z2oXX5sxGlvKnrLa5Q9njA62s9rlD3eZqYPV7DmrRXi/8hUdZurgKqtFGM4onaxld1ktwnBG6WQzMwqMUYCMAmQUIKMAjY1ykKkxowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBGATIKkFGAjAJUotxmtQjDGaUTowAZBcgoQEYBMgqQUYCMAmQUIKMAGQXIKEBjo+xlamxMlIdsmqmxMVF+Zupg3ijHmTqZJ8pupo4+ivI3W8jUWXnE/k/2Pkb5e9FGpi+0le3PTkmSJH0Dk8kr2Milf2sdpAkAAAAASUVORK5CYII=';
  const tour = 'Tour this home';
  const rooms = 'View all rooms';
  const tourImage = 'https://image.flaticon.com/icons/svg/54/54917.svg';
  const roomsImage = 'https://image.flaticon.com/icons/svg/7/7859.svg';

  let btnText, btnImage;

  if (props.listview === true) {
    btnText = rooms;
    btnImage = roomsImage;
  } else {
    btnText = tour;
    btnImage = tourImage;
  }

  return (
    <div>
      <div className={style.tour_page}>
        <div className={style.navigation}>
          <button className={style.back_button} onClick={() => props.handlepageviewclick()}><img className={style.back_image} src={arrowImage} /></button>
          <button className={style.tour_button} onClick={() => props.handlelistviewclick()}><img className={style.tour_image} src={btnImage} />{btnText}</button>
        </div>
        <div className={style.content}>
          <p className={`${style.room_text} ${style.top}`}>Living area</p>
          <p className={style.description_text}>{props.descriptions.living_room}</p>
          <img src={props.images.living_room} className={style.picture} />

          <p className={style.room_text}>Dining area</p>
          <p className={style.description_text}>{props.descriptions.dining_room}</p>
          <img src={props.images.dining_room} className={style.picture} />

          <p className={style.room_text}>Bedroom area</p>
          <p className={style.description_text}>{props.descriptions.bedroom}</p>
          <img src={props.images.bedroom} className={style.picture} />

          <p className={style.room_text}>Den</p>
          <p className={style.description_text}>{props.descriptions.den}</p>
          <img src={props.images.den} className={style.picture} />
        </div>
      </div>
    </div>
  );
};

export default TourPage;