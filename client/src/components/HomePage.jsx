import React from 'react';
import axios from 'axios';
import Introduction from './Introduction.jsx';
import Picture from './Picture.jsx';
import TourPage from './TourPage.jsx';
import ListView from './ListView.jsx';
import queryString from 'query-string';
import { CSSTransitionGroup } from 'react-transition-group';


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
    this.saveHomeToList = this.saveHomeToList.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.shareHome = this.shareHome.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
  }

  componentDidMount() {
    let parsed = queryString.parse(location.search);
    let currentId = Number(parsed.id);
    if (currentId) {
      this.getImage(Number(parsed.id));
      this.setState({ currentId: currentId });
    } else {
      this.getImage(1);
    }
  }

  getImage(id) {
    axios.get(`/images/${id}`)
      .then((response) => {
        this.setState({ home: response.data });
      })
      .catch(function (error) {
        return;
      });
  }

  saveHomeToList(id) {
    axios.patch(`/images/${id}`)
      .then((response) => {
        this.setState({ home: response.data });
      })
      .catch((error) => {
        console.log('CLIENT PATCH FAILED');
        return;
      });
  }

  shareHome(id) {
    axios.patch(`/images/${id}`, { 'shared': true })
      .then((response) => {
        this.setState({ home: response.data });
      })
      .catch((error) => {
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

  handleSaveClick() {
    this.saveHomeToList(this.state.currentId);
  }

  handleShareClick() {
    this.shareHome(this.state.currentId);
    if (this.state.home.shared) {
      console.log('already shared');
    } else {
      console.log('shared');
    }
  }

  render() {

    return (
      <div className='home-page'>
        <Introduction home={this.state.home} />
        {this.state.home.image &&
          <Picture
            home={this.state.home}
            handlePageViewClick={this.handlePageViewClick}
            tourView={this.state.tourView}
            handleSaveClick={this.handleSaveClick}
            handleShareClick={this.handleShareClick} />
        }
        <div>
          <CSSTransitionGroup
            transitionName="tour-view"
            transitionEnterTimeout={600}
            transitionLeave={false}>
            {this.state.home.image && this.state.tourView ?
              <TourPage
                images={this.state.home.image}
                descriptions={this.state.home.descriptions}
                handlePageViewClick={this.handlePageViewClick}
                handleListViewClick={this.handleListViewClick} />
              : null}
          </CSSTransitionGroup>
        </div>

        {this.state.home.image && this.state.tourView && this.state.listView ?
          <ListView images={this.state.home.image} />
          : null}


      </div>
    );
  }

}

export default HomePage;