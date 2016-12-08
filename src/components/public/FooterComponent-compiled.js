'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('styles/public/Footer.css');

var FooterComponent = function FooterComponent(props) {
  return _react2.default.createElement(
    'div',
    { className: 'footer-component' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\xA9\u6B66\u6C49\u5927\u5B66\u5B66\u751F\u4F1A'
      ),
      _react2.default.createElement(
        'span',
        null,
        '\u6280\u672F\u652F\u6301 ',
        _react2.default.createElement(
          'a',
          { href: '#', className: 'footer-luojiastudio' },
          '\u73DE\u73C8\u5DE5\u4F5C\u5BA4'
        )
      )
    )
  );
};

FooterComponent.displayName = 'PublicFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

exports.default = FooterComponent;

//# sourceMappingURL=FooterComponent-compiled.js.map