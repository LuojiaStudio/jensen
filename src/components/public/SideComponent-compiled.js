'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _close = require('react-icons/lib/fa/close');

var _close2 = _interopRequireDefault(_close);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/public/Side.css');

var SideComponent = function (_React$Component) {
  _inherits(SideComponent, _React$Component);

  function SideComponent() {
    _classCallCheck(this, SideComponent);

    return _possibleConstructorReturn(this, (SideComponent.__proto__ || Object.getPrototypeOf(SideComponent)).apply(this, arguments));
  }

  _createClass(SideComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var side_class = 'side-close';
      if (this.props.open === true) side_class = 'side-open';
      return _react2.default.createElement(
        'div',
        { className: side_class },
        _react2.default.createElement(
          'div',
          { className: 'side-tool-wrapper' },
          _react2.default.createElement(
            'span',
            null,
            '\u83DC\u5355'
          ),
          _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(_close2.default, {
              onClick: function onClick() {
                return _this2.props.onClose();
              }
            })
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'side-list' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u65B0\u95FB'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u901A\u77E5'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u6743\u76CA'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u4E0B\u8F7D'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              '\u8054\u7CFB\u6211\u4EEC'
            )
          )
        )
      );
    }
  }]);

  return SideComponent;
}(_react2.default.Component);

SideComponent.displayName = 'PublicSideComponent';

// Uncomment properties you need
// SideComponent.propTypes = {};
// SideComponent.defaultProps = {};

exports.default = SideComponent;

//# sourceMappingURL=SideComponent-compiled.js.map