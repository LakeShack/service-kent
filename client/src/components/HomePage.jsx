import React from 'react';
import Introduction from './Introduction.jsx';
import Picture from './Picture.jsx';
import Save from './Save.jsx';
import Share from './Share.jsx';
import Tour from './Tour.jsx';
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
        console.log('CLIENT GET FAILED');
        return;
      });
  }


  render() {
    return (
      <div>
        <Introduction image={this.state.image}/>  
        { this.state.image.image && 
         <Picture image={this.state.image}/>           
        }      
        <Save image={this.state.image}/>
        <Share image={this.state.image}/>
        <Tour image={this.state.image}/>      
      </div>
    );
  }
}

export default HomePage;