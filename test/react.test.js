import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import axios from 'axios';
import HomePage from '../client/src/components/HomePage.jsx';
import Introduction from '../client/src/components/Introduction.jsx';
import Picture from '../client/src/components/Picture.jsx';
import Save from '../client/src/components/Save.jsx';
import Share from '../client/src/components/Share.jsx';
import Tour from '../client/src/components/Tour.jsx';
import TourPage from '../client/src/components/TourPage.jsx';
import ListView from '../client/src/components/ListView.jsx';


const testData = {
  images: {
    living_room: 'living_room',
    bedroom: 'bedroom',
    dining_room: 'dining_room',
    den: 'den'
  },
  descriptions: {
    living_room: 'living_room description',
    bedroom: 'bedroom description',
    dining_room: 'dining_room description',
    den: 'den description'
  }
};

describe('HomePage', () => {

  const homePage = shallow(<HomePage />);

  it('HomePage component should render the home-page div', () => {
    expect(homePage.is('.home-page')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<HomePage />).find('.home-page').length).toBe(1);
  });

  const wrapper = homePage;
  wrapper.state().tourView = false;
  wrapper.state().listView = false;

  it('handlePageViewClick in HomePage toggles the boolean in state.tourView', () => {

    expect(wrapper.state().tourView).toEqual(false);
    wrapper.instance().handlePageViewClick();
    expect(wrapper.state('tourView')).toEqual(true);
    wrapper.instance().handlePageViewClick();

  });

  it('handleListViewClick in HomePage toggles the boolean in state.listView', () => {

    expect(wrapper.state().listView).toEqual(false);
    wrapper.instance().handleListViewClick();
    expect(wrapper.state('listView')).toEqual(true);
    wrapper.instance().handleListViewClick();

  });

  const tourButton = shallow(<Tour handlepageviewclick={() => wrapper.setState({ tourView: true })} />);

  it('handlepageclickview in Tour toggles the boolean in state.tourView', () => {

    expect(wrapper.state().tourView).toEqual(false);
    tourButton.find('.tour_button').simulate('click');
    expect(wrapper.state('tourView')).toEqual(true);
    tourButton.find('.tour_button').simulate('click');

  });

  const tourButtons = shallow(<TourPage handlelistviewclick={() => wrapper.setState({ listView: true })} handlepageviewclick={() => wrapper.setState({ tourView: false })} images={testData.images} descriptions={testData.descriptions} />);

  it('handlepageclickview in TourPage toggles the boolean in state.tourView', () => {

    expect(wrapper.state().tourView).toEqual(true);
    tourButtons.find('.back_button').simulate('click');
    expect(wrapper.state('tourView')).toEqual(false);
    tourButtons.find('.back_button').simulate('click');

  });

  it('handlelistclickview in TourPage toggles the boolean in state.listView', () => {

    expect(wrapper.state().listView).toEqual(false);
    tourButtons.find('.tour_button').simulate('click');
    expect(wrapper.state('listView')).toEqual(true);
    tourButtons.find('.tour_button').simulate('click');

  });

  jest.mock('axios', () => {
    const sampleHome = [
      { title: 'test home', url: 'sample_url' }
    ];

    return {
      get: jest.fn(() => Promise.resolve(sampleHome)),
    };
  });

  it('get home on #componentDidMount', () => {
    const home = homePage;

    home.update();
    setTimeout(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('sample_url');
      expect(app.state()).toHaveProperty('home', [
        { title: 'test home', url: 'sample_url' }
      ]);
    }, 1000);
  });
});

describe('Introduction', () => {

  const home = {
    location: 'test',
    rating: 3,
    title: 'test'
  };

  it('Introduction component should render the introduction div', () => {
    expect(shallow(<Introduction home={home}/>).is('.introduction')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<Introduction home={home}/>).find('.introduction').length).toBe(1);
  });

});


describe('Picture', () => {

  it('should match snapshot', () => {
    const home = {
      image: {
        living_room: 'test'
      }
    };
    const view = renderer.create(
      <Picture home={home} />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

});

describe('Save', () => {

  it('should match snapshot', () => {
    const home = {
      saved: true
    };
    const view = renderer.create(
      <Save home={home} />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

});

describe('Share', () => {

  const home = {
    shared: false
  };

  it('should match snapshot', () => {
    const view = renderer.create(
      <Share home={home}/>
    ).toJSON();

    expect(view).toMatchSnapshot();
  });


});

describe('Tour', () => {

  it('should match snapshot', () => {
    const view = renderer.create(
      <Tour />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

});

describe('TourPage', () => {

  it('should match snapshot', () => {
    const images = ['tour', 'test'];
    const descriptions = ['descriptions', 'test'];
    const view = renderer.create(
      <TourPage images={images} descriptions={descriptions} />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

});

describe('ListView', () => {

  it('should match snapshot', () => {
    const images = ['list', 'test'];
    const view = renderer.create(
      <ListView images={images} />
    ).toJSON();

    expect(view).toMatchSnapshot();
  });

});