import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
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

  it('HomePage component should render the home-page div', () => {
    expect(shallow(<HomePage />).is('.home-page')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<HomePage />).find('.home-page').length).toBe(1);
  });

  const wrapper = shallow(<HomePage />);
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


});

describe('Introduction', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Introduction />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

});


describe('Picture', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Picture />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    }, 1000);

  });

  it('Picture component should render the picture div', () => {
    setTimeout(() => {
      expect(shallow(<Picture />).is('.picture')).toBe(true);
    }, 1000);
  });

});

describe('Save', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Save />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

  it('Save component should render the save button', () => {
    setTimeout(() => {
      expect(shallow(<Picture />).is('.save_button')).toBe(true);
    }, 1000);
  });

});

describe('Share', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Share />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

  it('Share component should render the share button', () => {
    setTimeout(() => {
      expect(shallow(<Picture />).is('.share_button')).toBe(true);
    }, 1000);
  });

});

describe('Tour', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Tour />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

  it('Tour component should render the tour button', () => {
    setTimeout(() => {
      expect(shallow(<Picture />).is('.tour_button')).toBe(true);
    }, 1000);
  });

});

describe('TourPage', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <TourPage />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

  it('TourPage component should render the pictures', () => {
    setTimeout(() => {
      expect(shallow(<TourPage />).is('.picture')).toBe(true);
    }, 1000);
  });

});

describe('ListView', () => {

  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <ListView />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);

  it('ListView component should render the pictures', () => {
    setTimeout(() => {
      expect(shallow(<ListView />).is('.picture')).toBe(true);
    }, 1000);
  });

});