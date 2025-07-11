const _ = require("lodash");

function add(num1, num2) {
  return _.add(num1, num2);
}

function sub(num1, num2) {
  return _.subtract(num1, num2);
}

function mult(num1, num2) {
  return _.multiply(num1, num2);
}

function div(num1, num2) {
  if (_.eq(num2, 0)) {
    throw new Error("Cannot divid by zero");
  }
  return _.divide(num1, num2);
}

module.exports = {
  add,
  sub,
  mult,
  div,
};
