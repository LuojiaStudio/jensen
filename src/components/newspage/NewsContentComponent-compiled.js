'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/newspage/NewsContent.css');

var NewsContentComponent = function (_React$Component) {
  _inherits(NewsContentComponent, _React$Component);

  function NewsContentComponent() {
    _classCallCheck(this, NewsContentComponent);

    return _possibleConstructorReturn(this, (NewsContentComponent.__proto__ || Object.getPrototypeOf(NewsContentComponent)).apply(this, arguments));
  }

  _createClass(NewsContentComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'newscontent-component' },
        _react2.default.createElement(
          'div',
          { className: 'newspage-row' },
          _react2.default.createElement(
            'div',
            { className: 'newspage-col' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u8BB02016\u5E74\u6CE8\u518C\u5FD7\u613F\u8005\u5927\u4F1A\u66A8\u52A8\u5458\u5927\u4F1A'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u7535\u5B50\u4FE1\u606F\u5B66\u9662\u65B0\u751F\u8FA9\u8BBA\u8D5B\u51B3\u8D5B\u2014\u2014\u5507\u67AA\u820C\u6218\uFF0C\u7406\u662F\u975E\u66F2\u76F4'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u5320\u5FC3\u7B51\u68A6--\u6211\u9662\u672C\u79D12013\u7EA74\u73ED\u8363\u83B7\u6B66\u6C49\u5927\u5B66\u201C\u5148\u8FDB\u73ED\u96C6\u4F53\u6807\u5175\u201D'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u201C\u6211\u4EEC\u8BF4\u4EC0\u4E48\u90FD\u961F\u201D\u5230\u5E95\u201C\u5BF9\u5E95\u201C\u5BF9\u5E95\u201C\u5BF9\u5E95\u201C\u5BF9\u4E0D\u961F\u201D\u2014\u2014\u8BB0\u533B\u5B66\u90E8\u9662\u65B0\u8FA9\u8BBA\u8D5B'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u7EA2\u65D7\u98D8\u6292\u7231\u56FD\u5FD7\uFF0C\u6218\u9F13\u64C2\u9882\u65F6\u4EE3\u6B4C'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '\u67E5\u770B\u66F4\u591A..'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'newspage-col' },
            _react2.default.createElement('div', { className: 'news-img-wrapper' })
          )
        )
      );
    }
  }]);

  return NewsContentComponent;
}(_react2.default.Component);

NewsContentComponent.displayName = 'NewspageNewsContentComponent';

// Uncomment properties you need
// NewsContentComponent.propTypes = {};
// NewsContentComponent.defaultProps = {};

exports.default = NewsContentComponent;

//# sourceMappingURL=NewsContentComponent-compiled.js.map