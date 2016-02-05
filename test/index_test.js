
/**
 * Module dependencies.
 */

import { default as isValidEin, mask } from '../src';
import should from 'should';

/**
 * EIN sample numbers.
 */

const invalidNumbers = [
  '001234567',
  '071234567',
  '081234567',
  '091234567',
  '171234567',
  '181234567',
  '191234567',
  '281234567',
  '291234567',
  '491234567',
  '691234567',
  '701234567',
  '781234567',
  '791234567',
  '891234567',
  '961234567',
  '971234567'
];
const validNumbers = [
  '011234567',
  '021234567',
  '031234567'
];

/**
 * Test.
 */

describe('isValidEin', () => {
  describe('default()', () => {
    it('should return `false` if ein is invalid', () => {
      for (const ein of invalidNumbers) {
        isValidEin(ein).should.be.false();
      }
    });

    it('should return `true` if ein is valid', () => {
      for (const ein of validNumbers) {
        isValidEin(ein).should.be.true();
      }
    });
  });

  describe('mask()', () => {
    it('should mask a valid ein', () => {
      mask('031234567').should.equal('XXXXX4567');
    });

    it('should throw an error if ein is invalid', () => {
      try {
        mask('971234567');

        should.fail();
      } catch (e) {
        e.should.be.instanceOf(Error);
        e.message.should.equal('Invalid Employer Identification Number');
      }
    });
  });
});
