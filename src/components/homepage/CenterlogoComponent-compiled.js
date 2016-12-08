'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _angleDown = require('react-icons/lib/fa/angle-down');

var _angleDown2 = _interopRequireDefault(_angleDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('styles/homepage/Centerlogo.css');

var CenterlogoComponent = function (_React$Component) {
  _inherits(CenterlogoComponent, _React$Component);

  function CenterlogoComponent() {
    _classCallCheck(this, CenterlogoComponent);

    return _possibleConstructorReturn(this, (CenterlogoComponent.__proto__ || Object.getPrototypeOf(CenterlogoComponent)).apply(this, arguments));
  }

  _createClass(CenterlogoComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.onload = function () {
        //配置
        var config = {
          vx: 2, //点x轴速度,正为右，负为左
          vy: 2, //点y轴速度
          height: 2, //点高宽，其实为正方形，所以不宜太大
          width: 2,
          count: 100, //点个数
          color: "15, 31, 123", //点颜色
          stroke: "15, 31, 123", //线条颜色
          dist: 3000, //点吸附距离
          e_dist: 20000, //鼠标吸附加速距离
          max_conn: 10 //点到点最大连接数
        };
        //调用\
        CanvasParticle(config);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'centerlogo-component' },
        _react2.default.createElement('img', { className: 'homepage-center-img', src: '../../images/logo.png', alt: '\u6B66\u6C49\u5927\u5B66\u5B66\u751F\u4F1A' }),
        _react2.default.createElement(
          'div',
          { className: 'center-bar' },
          '\u4E0E\u5176\u5728\u522B\u5904\u4EF0\u671B\uFF0C\u4E0D\u5982\u5728\u8FD9\u91CC\u5E76\u80A9'
        ),
        _react2.default.createElement(
          'div',
          { className: 'homepage-btn' },
          _react2.default.createElement(_angleDown2.default, null)
        )
      );
    }
  }]);

  return CenterlogoComponent;
}(_react2.default.Component);

CenterlogoComponent.displayName = 'HomepageCenterlogoComponent';

// Uncomment properties you need
// CenterlogoComponent.propTypes = {};
// CenterlogoComponent.defaultProps = {};

exports.default = CenterlogoComponent;

//# sourceMappingURL=CenterlogoComponent-compiled.js.map