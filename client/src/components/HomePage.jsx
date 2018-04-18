import React from 'react';
import Introduction from './Introduction.jsx';
import Picture from './Picture.jsx';
import $ from 'jquery';
import queryString from 'query-string';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    let parsed = queryString.parse(location.search);
    let currentId = Number(parsed.id);
    if (currentId) {
      this.getImage(Number(parsed.id));      
    } else {
      this.getImage(1);
    }
  }

  getImage(id) {
    $.get(`/images/${id}`, function(data) {
    })
      .done((data) => {
        let arr = [];
        arr.push(data);
        this.setState({image: data});
        console.log('CLIENT GET IMAGE OBJ :: ', data.image);        
      })
      .fail((error) => {
        return;
      });
  }

  saveImageToList(id) {
    $.patch(`/images/${id}`, function(data) {
    })
      .done((data) => {
        let arr = [];
        arr.push(data);
        this.setState({image: data});
        console.log('CLIENT PATCH IMAGE OBJ :: ', data.image);        
      })
      .fail((error) => {
        console.log('CLIENT PATCH FAILED');
        return;
      });
  }

  render() {
    return (
      <div className="home-page">
        <Introduction image={this.state.image}/>  
        { this.state.image.image && 
         <Picture image={this.state.image}/>           
        }         
      </div>
    );
  }
}

export default HomePage;