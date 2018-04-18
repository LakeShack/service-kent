import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import HomePage from '../client/src/components/HomePage.jsx';
import Introduction from '../client/src/components/Introduction.jsx';
import Picture from '../client/src/components/Picture.jsx';
import Save from '../client/src/components/Save.jsx';
import Share from '../client/src/components/Share.jsx';
import Tour from '../client/src/components/Tour.jsx';


//test the data in state
//test the get request 
jest.mock('react-dom');

describe('homepage rendered', () => {

  it('HomePage component should render the home-page div', () => {
    expect(shallow(<HomePage />).is('.home-page')).toBe(true);
  });

  it('should mount only 1', function () {
    expect(mount(<HomePage />).find('.home-page').length).toBe(1);
  });

});

describe('Introduction component renders correctly', () => {
  it('renders correctly', () => {
    setTimeout(() => {
      const rendered = renderer.create(
        <Introduction />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
    });
  }, 1000);
});

describe('Picture component renders correctly', () => {
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

describe('Save component renders correctly', () => {
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

describe('Share component renders correctly', () => {
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

describe('Tour component renders correctly', () => {
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