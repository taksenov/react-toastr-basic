'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToastrTypes = require('../common/ToastrTypes');

var _ToastrTypes2 = _interopRequireDefault(_ToastrTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToastrItem = function (_Component) {
    _inherits(ToastrItem, _Component);

    function ToastrItem(props) {
        _classCallCheck(this, ToastrItem);

        var _this = _possibleConstructorReturn(this, (ToastrItem.__proto__ || Object.getPrototypeOf(ToastrItem)).call(this, props));

        _this.state = {
            className: ''
        };
        return _this;
    }

    _createClass(ToastrItem, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var className = 'toaster animated';
            if (this.props.toastrType == _ToastrTypes2.default.danger) {
                className += ' danger shake';
            } else if (this.props.toastrType === _ToastrTypes2.default.success) {
                className += ' success';
            } else {
                className += ' fadeIn';
            }
            this.setState({ className: className });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.state.className },
                _react2.default.createElement(
                    'strong',
                    null,
                    this.props.title
                ),
                _react2.default.createElement('br', null),
                this.props.message
            );
        }
    }]);

    return ToastrItem;
}(_react.Component);

exports.default = ToastrItem;


ToastrItem.propType = {
    title: _react2.default.PropTypes.string.isRequired,
    message: _react2.default.PropTypes.string.isRequired,
    toastrType: _react2.default.PropTypes.string
};

ToastrItem.defaultProps = {
    toastrType: 'default'
};