'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.mask = mask;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Campus prefixes.
 */

const campus = {
  andover: ['10', '12'],
  atlanta: ['60', '67'],
  austin: ['50', '53'],
  brookhaven: ['01', '02', '03', '04', '05', '06', '11', '13', '14', '16', '21', '22', '23', '25', '34', '51', '52', '54', '55', '56', '57', '58', '59', '65'],
  cincinnati: ['30', '32', '35', '36', '37', '38', '61'],
  fresno: ['15', '24'],
  internet: ['20', '26', '27', '45', '46', '47'],
  kansas: ['40', '44'],
  memphis: ['94', '95'],
  ogden: ['80', '90'],
  philadelphia: ['33', '39', '41', '42', '43', '46', '48', '62', '63', '64', '66', '68', '71', '72', '73', '74', '75', '76', '77', '81', '82', '83', '84', '85', '86', '87', '88', '91', '92', '93', '98', '99'],
  sba: ['31']
};
/**
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes` for more information.
 *
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number, is used to identify a business entity.
 *
 * NOTES:
 *
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 */

/**
 * Module dependencies.
 */

const prefixes = _lodash2.default.flatten(_lodash2.default.valuesIn(campus));
const expression = /^(\d{9})$/;

/**
 * Validate function.
 */

function isValid(ein) {
  if (!expression.test(ein)) {
    return false;
  }

  return _lodash2.default.includes(prefixes, ein.substr(0, 2));
}

/**
 * Masks the EIN with "X" placeholders to protect sensitive data,
 * while keeping some of the original digits for contextual recognition.
 *
 * E.g. "123456789" -> "XXXXX6789"
 */

function mask(ein) {
  if (!isValid(ein)) {
    throw new Error('Invalid Employer Identification Number');
  }

  return ein.substr(0, ein.length - 4).replace(/[\w]/g, 'X') + ein.substr(-4);
}

/**
 * Export default.
 */

exports.default = isValid;