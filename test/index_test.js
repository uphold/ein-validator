
/**
 * Module dependencies.
 */

import should from 'should';
import { isValid, mask } from '../src';

/**
 * `Employer Identification Number` samples.
 */

const numbers = {
  invalid: ['001234567', '171234567', '291234567', '491234567', '691234567', '701234567', '891234567', '961234567'],
  valid: {
    format: ['01-1234567', '02-1234567', '03-1234567'],
    soft: ['011-     234567', '0 21234567', '03    1234--- 567'],
    strict: ['011234567', '021234567', '031234567']
  }
};

/**
 * Test.
 */

describe('EinValidator', () => {
  describe('isValid()', () => {
    it('should return false if number is invalid', () => {
      for (let i = 0; i < numbers.invalid.length; i++) {
        isValid(numbers.invalid[i], { strict: 'format' }).should.be.false();
        isValid(numbers.invalid[i], { strict: false }).should.be.false();
        isValid(numbers.invalid[i], { strict: true }).should.be.false();
      }
    });

    it('should return true for strict and formatted numbers if strict is format', () => {
      const invalid = [].concat(numbers.invalid, numbers.valid.soft);
      const valid = [].concat(numbers.valid.format, numbers.valid.strict);

      for (let i = 0; i < invalid.length; i++) {
        isValid(invalid[i], { strict: 'format' }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: 'format' }).should.be.true();
      }
    });

    it('should return true for all valid numbers if strict is false', () => {
      const valid = [].concat(numbers.valid.format, numbers.valid.soft, numbers.valid.strict);

      for (let i = 0; i < numbers.invalid.length; i++) {
        isValid(numbers.invalid[i], { strict: false }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: false }).should.be.true();
      }
    });

    it('should return true only for strict numbers if strict is true', () => {
      const invalid = [].concat(numbers.invalid, numbers.valid.format, numbers.valid.soft);
      const valid = numbers.valid.strict;

      for (let i = 0; i < invalid.length; i++) {
        isValid(invalid[i], { strict: true }).should.be.false();
      }

      for (let i = 0; i < valid.length; i++) {
        isValid(valid[i], { strict: true }).should.be.true();
      }
    });

    it('should be `strict` by default', () => {
      isValid(numbers.valid.format[0]).should.be.false();
      isValid(numbers.valid.soft[0]).should.be.false();
      isValid(numbers.valid.strict[0]).should.be.true();
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
      mask(numbers.valid.format[0], { strict: 'format' }).should.equal('XX-XXX4567');
      mask(numbers.valid.soft[0], { strict: false }).should.equal('XXX-     XX4567');
      mask(numbers.valid.strict[0], { strict: true }).should.equal('XXXXX4567');
    });
  });
});
