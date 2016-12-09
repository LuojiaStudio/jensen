/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';

var _shallowRenderHelper = require('helpers/shallowRenderHelper');

var _shallowRenderHelper2 = _interopRequireDefault(_shallowRenderHelper);

var _NewspageComponent = require('components/newspage/NewspageComponent.js');

var _NewspageComponent2 = _interopRequireDefault(_NewspageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('NewspageComponent', function () {
  var component = void 0;

  beforeEach(function () {
    component = (0, _shallowRenderHelper2.default)(_NewspageComponent2.default);
  });

  it('should have its component name as default className', function () {
    expect(component.props.className).to.equal('newspage-component');
  });
});

//# sourceMappingURL=NewspageComponentTest-compiled.js.map