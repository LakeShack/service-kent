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

  const roomArr = [['Living area', 'living_room'], ['Dining area', 'dining_room'], ['Bedroom area', 'bedroom'], ['Den', 'den']];

  const renderRooms = roomArr.map((room) => {
    return (<div key={room[0]}>
      <p className={style.room_text}>{room[0]}</p>
      <p className={style.description_text}>{props.descriptions[room[1]]}</p>
      <img src={props.images[room[1]]} className={style.picture} />
    </div>);
  });

  return (

    <div className={style.tour_page}>
      <div className={style.navigation}>
        <button className={style.back_button} onClick={() => props.handlepageviewclick()}><img className={style.back_image} src={arrowImage} /></button>
        <button className={style.tour_button} onClick={() => props.handlelistviewclick()}><img className={style.tour_image} src={btnImage} />{btnText}</button>
      </div>
      <div className={`${style.content} ${style.top}`}>
        {renderRooms}
      </div>
    </div>

  );
};

export default TourPage;