
/**
 * Module dependencies.
 */

import should from 'should';
import { isValid, mask } from '../src';

/**
 * `Employer Identification Number` samples.
 */

const numbers = {
  invalid: ['0-11234567', '01#1234567', '01  1234567', '01 1234 567'],
  valid: ['01-1234567', '01 1234567', '011234567']
};

/**
 * Test.
 */

describe('EinValidator', () => {
  describe('isValid()', () => {
    it('should return `false` if number is invalid', () => {
      numbers.invalid.forEach(number => isValid(number).should.be.false());
    });

    it('should return `true` if number is valid', () => {
      numbers.valid.forEach(number => isValid(number).should.be.true());
    });
  });

  describe('mask()', () => {
    it('should throw an error if value is invalid', () => {
      try {
        mask(numbers.invalid[0]);

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('Invalid Employer Identification Number');
      }
    });

    it('should mask a valid value', () => {
      mask(numbers.valid[0]).should.equal('XX-XXX4567');
      mask(numbers.valid[1]).should.equal('XX XXX4567');
      mask(numbers.valid[2]).should.equal('XXXXX4567');
    });
  });
});
