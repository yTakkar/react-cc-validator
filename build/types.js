"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable */
// NOTE: This file is not imported anywhere. Just to document types

var CardNumber = String;

var CardType = String;

var Card = {
  type: CardType,
  niceType: String
  // ...
};

var ValidationResult = {
  isValid: Boolean,
  isCardNumberValid: Boolean,
  card: Card
  // ...
};

var ComponentState = {
  isValid: Boolean,
  cardNumber: CardNumber,
  cardType: CardType
};

var InputProps = {
  onChange: Function,
  value: String
};

var PassedProps = _extends({}, InputProps, {
  isValid: Boolean,
  cardType: String,
  getInputProps: function getInputProps() {
    return InputProps;
  }
});

var PropTypes = {
  children: function children(PassedProps) {
    return ReactNode;
  },
  validCardTypes: Array[String],
  format: Boolean
};