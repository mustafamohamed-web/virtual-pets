const Pet = require('/Users/mustafamohammed/Desktop/Everything/virtual-pets/src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});