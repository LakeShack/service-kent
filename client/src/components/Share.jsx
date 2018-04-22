import React from 'react';
import style from './styles/picture-share-save-tour.css';
import { ToastContainer, toast } from 'react-toastify';
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css';

var Share = (props) => {

  const shareImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALLSURBVHhe7Z3Bqw1hGIePBWFzUygWLOQvsFCUKDtlYytlSVnaKcpSNhZWlpQlKwr/gbKyQ8niriylpPi9t/fU900z58w3850zL+d56lnM1Nx+zVP3dufe5swAarNXPpJHdo5gUvbLt/KP/CSPSZgIi/FOWoy5nyVRJqAtBlEmYlGMuURZE31izCXKiimJMZcoK6Irxu/G8a/GsUmUynTF+CjvNs49kS8b50yiVGJRjMPyRnLOfCz3yLYoXyRRRrAshtEWxCBKZfrEMLqCGESpRN8YxqIgBlFGUhLDWBbEIMpASmMYfYIYRClkSAyjbxCDKD0ZGsMoCWIQZQm75GvZvEF9YhilQQyL8kKm15n2y+MBudGckc0b0zeGMSSI0RXlptxoTsj0eVRJDGNoEKMtyhW58VyT7+VTechOFDAmiGFRHsgP8r60b6EwgrFBoDIECQZBgkGQYBAkGAQJBkGCQZBgEMSx/zi/WNELcsiDvRpB9smzsm3XUA/KtWKPqtMbUcMf8rwsYWyQ4/KbTL9GDS/JtbKKIOZzWcLYILdlen0t/5sg92QJY4Nclun1tZw8yE/5ZoSv5B25W5ZQ42fIdWl/RWzb1ddtme6YPMhXOQU1gtTgmUx3EMQliEuQfAdBXIK4BMl3EMQliEuQfAdBXIK4BMl3EMQliEuQfAdBXIK4BMl3EMQliEuQfAdBXIK4BMl3EMQliEuQfAdBXIK4BMl3EMQliEuQfAdBXIK4BMl3EMQliEuQfMfGBrkq0x0P5RQQxDkqv0vbYO9MOSengCAJJ+UteXrnaBoIEgyCBIMgwSBIMAgSDIIEgyDBIEgwCBIMggSDIMEgSDAIEgyCBIMgwSBIMAgSDIIEgyDBIEgwCBIMggSDIMEgSDAIEgyCBIMgwSBIMAgSjHBBxr77/V833LvfMZcgwSRIMNcexD5l+RR2uiUHMJv9BT3oPXjaCC5CAAAAAElFTkSuQmCC';

  let shared;

  if (props.home.shared) {
    shared = 'This home has already been shared!';
  } else {
    shared = 'Successfully shared to all your social media!';
  }

  var notify = () => {
    toast(`${shared}`, {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <div>
      <button className={style.share_button} onClick={() => { props.handleshareclick(); notify(); }}><img className={style.share_image} src={shareImage} /></button>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>

  );

};

export default Share;