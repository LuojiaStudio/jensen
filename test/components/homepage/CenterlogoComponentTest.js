/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import CenterlogoComponent from 'components/homepage/CenterlogoComponent.js';

describe('CenterlogoComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(CenterlogoComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('centerlogo-component');
  });
});
