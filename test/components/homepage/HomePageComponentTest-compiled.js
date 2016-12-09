/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

var _shallowRenderHelper = require('helpers/shallowRenderHelper');

var _shallowRenderHelper2 = _interopRequireDefault(_shallowRenderHelper);

var _HomePageComponent = require('components/homepage/HomePageComponent.js');

var _HomePageComponent2 = _interopRequireDefault(_HomePageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HomePageComponent', function () {
  var component = void 0;

  beforeEach(function () {
    component = (0, _shallowRenderHelper2.default)(_HomePageComponent2.default);
  });

  it('should have its component name as default className', function () {
    expect(component.props.className).to.equal('homepage-component');
  });
});

//# sourceMappingURL=HomePageComponentTest-compiled.js.map