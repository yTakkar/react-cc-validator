'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardValidator = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cardValidator = require('card-validator');

var _cardValidator2 = _interopRequireDefault(_cardValidator);

var _ccNumberFormatter = require('@shaaditech/cc-number-formatter');

var _utils = require('./utils');

var _stateUtils = require('./state-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardNumberValidator = function (_React$PureComponent) {
  _inherits(CardNumberValidator, _React$PureComponent);

  function CardNumberValidator() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardNumberValidator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardNumberValidator.__proto__ || Object.getPrototypeOf(CardNumberValidator)).call.apply(_ref, [this].concat(args))), _this), _this.state = (0, _stateUtils.getEmptyState)(), _this.formatCardNumber = (0, _utils.cond)(_this.props.format, [_ccNumberFormatter.formatCardNumber, _utils.identity]), _this.getValidationState = function (cardNumber) {
      return (0, _utils.Maybe)(cardNumber).map(_utils.validateCardNumber).map((0, _utils.validateCardType)(_this.props.validCardTypes)).cata({
        Just: (0, _stateUtils.validationToState)(cardNumber),
        Nothing: _stateUtils.getEmptyState
      });
    }, _this.getInputProps = function () {
      return {
        onChange: _this.onInputChange,
        value: _this.state.cardNumber
      };
    }, _this.onInputChange = function (_ref2) {
      var cardNumber = _ref2.target.value;
      return _utils.Maybe.Just(cardNumber).map(_this.formatCardNumber).map(_this.getValidationState).map((0, _stateUtils.setState)(_this));
    }, _this.render = function () {
      return _this.props.children(_extends({
        isValid: _this.state.isValid,
        cardType: _this.state.cardType,
        getInputProps: _this.getInputProps
      }, _this.getInputProps()));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // state :: ComponentState


  // formatCardNumber :: String ~> String


  // getValidationState :: CardNumber ~> ComponentState


  // getInputProps :: () ~> InputProps


  // onInputChange :: Event ~> Just<ComponentState>


  // render :: () ~> ReactNode


  return CardNumberValidator;
}(_react2.default.PureComponent);

exports.default = CardNumberValidator;


CardNumberValidator.propTypes = {
  children: _propTypes2.default.func.isRequired,
  validCardTypes: _propTypes2.default.arrayOf(_propTypes2.default.string),
  format: _propTypes2.default.bool
};

CardNumberValidator.defaultProps = {
  validCardTypes: [],
  format: true
};

exports.cardValidator = _cardValidator2.default;