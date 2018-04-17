import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import HomePage from '../client/src/components/HomePage.jsx';
import Introduction from '../client/src/components/Introduction.jsx';


//test the data in state
//test the get request 

describe('homepage rendered', () => {
 
//test rendering of the home page   
  it('HomePage component should render the home-page div', () => {
    expect(shallow(<HomePage />).is('.home-page')).toBe(true);
  });

  it('should mount only 1', function() {
    expect(mount(<HomePage />).find('.home-page').length).toBe(1);
  });

});
