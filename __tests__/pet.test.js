const Pet = require('/Users/mustafamohammed/Desktop/Everything/virtual-pets/src/pet.js');

describe('constructor', () => {
  
    it('sets the name property', () => {
      const pet = new Pet('Fido');
  
      expect(pet.name).toEqual('Fido');
    });
  });