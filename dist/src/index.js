'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValid = isValid;
exports.mask = mask;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number, is used to identify a business entity.
 *
 * NOTES:
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 *
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes` for more information.
 */

/**
 * Campus prefixes.
 */

var campus = {
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
 * Cache all available prefixes.
 */

var prefixes = [];

for (var location in campus) {
  prefixes.push.apply(prefixes, _toConsumableArray(campus[location]));
}

prefixes.sort();

/**
 * Expression.
 */

var expression = /^\d{2}[- ]{0,1}\d{7}$/;

/**
 * Validate function.
 */

function isValid(value) {
  if (!expression.test(value)) {
    return false;
  }

  return prefixes.indexOf(value.substr(0, 2)) !== -1;
}

/**
 * Mask the EIN with "X" placeholders to protect sensitive data,
 * while keeping some of the original digits for contextual recognition.
 *
 * E.g. "123456789" -> "XXXXX6789", "12-3456789" -> "XX-XXX6789".
 */

function mask(value) {
  if (!isValid(value)) {
    throw new Error('Invalid Employer Identification Number');
  }

  return '' + value.substr(0, value.length - 4).replace(/[\w]/g, 'X') + value.substr(-4);
}