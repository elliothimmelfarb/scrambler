const assert = require('chai').assert;
const scrambler = require('./scrambler')

describe('Scrambler', () => {
  describe('When it takes a string as input', () => {
    it('should not throw an error', () => {
      assert.doesNotThrow(() => scrambler('abc'));
    });
    it('should yield a string', () => {
      assert.typeOf(scrambler('abc').next().value, 'string')
    });
    it('should not yield an empty string', () => {
      assert.notEqual(scrambler('abc').next().value, '')
    });
    it('should not repeat same pattern', () => {
      const s = scrambler('abc');
      assert.notEqual(s.next().value, s.next().value);
    });
  });
  describe('When it takes an array as input', () => {
    it('should not throw an error', () => {
      assert.doesNotThrow(() => scrambler(['a', 'b', 'c']))
    });
    it('should yield a string', () => {
      assert.typeOf(scrambler(['a', 'b', 'c']).next().value, 'string')
    });
    it('should not yield an empty string', () => {
      assert.notEqual(scrambler(['a', 'b', 'c']).next().value, '')
    });
    it('should not repeat same pattern', () => {
      const s = scrambler(['a', 'b', 'c']);
      assert.notEqual(s.next().value, s.next().value);
    });
  });
});
