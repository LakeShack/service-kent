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
      home: {},
      tourView: false,
      listView: false,
      currentId: 1
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
      this.setState({currentId: currentId});
    } else {
      this.getImage(1);
    }

    this.handleSaveClick();

  }

  getImage(id) {

    $.get(`/images/${id}`, function (data) {
    })
      .done((data) => {
        this.setState({ home: data });
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
        <Introduction home={this.state.home} />
        {this.state.home.image &&
          <Picture 
            home={this.state.home} 
            handlepageviewclick={this.handlePageViewClick} 
            tourview={this.state.tourView} />
        }
        {this.state.home.image && this.state.tourView ? 
          <TourPage 
            images={this.state.home.image} 
            descriptions={this.state.home.descriptions} 
            handlepageviewclick={this.handlePageViewClick}
            handlelistviewclick={this.handleListViewClick}/> 
          : null}
        {this.state.home.image && this.state.tourView && this.state.listView ? 
          <ListView images={this.state.home.image} /> 
          : null}
      </div>
    );
  }

}

export default HomePage;