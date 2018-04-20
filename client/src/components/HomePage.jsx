import React from 'react';
import Introduction from './Introduction.jsx';
import Picture from './Picture.jsx';
import TourPage from './TourPage.jsx';
import ListView from './ListView.jsx';
import $ from 'jquery';
import queryString from 'query-string';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      tourView: false,
      listView: false,
    };

    this.getImage = this.getImage.bind(this);
    this.handlePageViewClick = this.handlePageViewClick.bind(this);
    this.handleListViewClick = this.handleListViewClick.bind(this);
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
    $.get(`/images/${id}`, function (data) {
    })
      .done((data) => {
        this.setState({ image: data });
        console.log('CLIENT GET IMAGE OBJ :: ', data.image);
      })
      .fail((error) => {
        return;
      });
  }

  saveImageToList(id) {
    $.patch(`/images/${id}`, function (data) {
    })
      .done((data) => {
        this.setState({ image: data });
        console.log('CLIENT PATCH IMAGE OBJ :: ', data.image);
      })
      .fail((error) => {
        console.log('CLIENT PATCH FAILED');
        return;
      });
  }

  handlePageViewClick() {
    this.setState((prevState) => {
      return { tourView: !prevState.tourView };
    });
  }


  handleListViewClick() {
    this.setState((prevState) => {
      return { listView: !prevState.listView };
    });
  }

  render() {
    return (
      <div className='home-page'>
        <Introduction image={this.state.image} />
        {this.state.image.image &&
          <Picture 
            image={this.state.image} 
            handlepageviewclick={this.handlePageViewClick} 
            tourview={this.state.tourView} />
        }
        {this.state.image.image && this.state.tourView ? 
          <TourPage 
            images={this.state.image.image} 
            descriptions={this.state.image.descriptions} 
            handlepageviewclick={this.handlePageViewClick}
            handlelistviewclick={this.handleListViewClick}/> 
          : null}
        {this.state.image.image && this.state.tourView && this.state.listView ? 
          <ListView images={this.state.image.image} /> 
          : null}
      </div>
    );
  }
}

export default HomePage;