const Pet = require('/Users/mustafamohammed/Desktop/Everything/virtual-pets/src/pet.js');

describe('constructor', () => {
  
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toBe('Fido');
    });
  
  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
    expect(pet.age).toBe(1);
    });

   it('increments hunger by 5', ()=>{
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toBe(5);
    });

    it(' decreases fitness by 3', ()=>{
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toBe(7);
        });
  });
})
  