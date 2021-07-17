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

        it('increments hunger by 5', () => {
            const pet = new Pet('Fido');
            pet.growUp();
            expect(pet.hunger).toBe(5);
        });

        it(' decreases fitness by 3', () => {
            const pet = new Pet('Fido');
            pet.growUp();
            expect(pet.fitness).toBe(7);
        });

        describe('walk', () => {
            it('increases fitness by 4', () => {
                const pet = new Pet('Fido');
                pet.fitness = 4;
                pet.walk();
                expect(pet.fitness).toEqual(8);
            });

        });
        it('fitness levels does not surpass 10', () => {
            const pet = new Pet('fido');

            pet.fitness = 8;
            pet.walk();

            expect(pet.fitness).toEqual(10);
        });
        it('decreases hunger by 3', () => {
            const pet = new Pet('Fido');

            pet.hunger = 2;
            pet.feed();

            expect(pet.hunger).toEqual(0);
        });
        it('hunger levels do not go below 0', () => {
            const pet = new Pet('Fido');

            pet.hunger = 0;
            pet.feed();

            expect(pet.hunger).toEqual(0);
        });
        
        it('if the pets fitness is 3 or less, it should return a string ', ()=>{
            const pet = new Pet('Fido');
            pet.fitness = 2
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I need a walk')
        })
        it('if the pets hunger is  above 5, it should return a string ', ()=>{
            const pet = new Pet('Fido');
            pet.hunger = 6
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I am hungry')
        })
        it('if the pets hunger is  above 5 and fitness is below 3 it should return a string ', ()=>{
            const pet = new Pet('Fido');
            pet.hunger = 6
            pet.fitness = 2
            pet.checkUp();

            expect(pet.checkUp()).toEqual('I am hungry AND i need a walk')
        })

        it('if pets age, hunger and fitness pass the isAlive property should return true', ()=>{
            const pet = new Pet('Fido');
            pet.hunger = 6
            pet.fitness = 2
            pet.age = 10
            expect(pet.isAlive).toEqual(true)
        })
        it('If pet is not alive should return pet is not alive',()=>{
            const pet = new Pet('Fido');
            pet.age = 30;
            expect(()=>pet.growUp()).toThrow('Your pet is no longer alive :(')
        })

        it('If pet is not alive should return pet is not alive',()=>{
            const pet = new Pet('Fido');
            pet.age = 30;
            expect(()=>pet.walk()).toThrow('Your pet is no longer alive :(')
        })

        describe('feed', () => {
           
        
            it('throws an error if the pet is not alive', () => {
                const pet = new Pet('Fido');
                pet.age = 30;
                expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
              });
            });
        
      describe('creates a new baby',()=>{
          it('The output of haveBaby is the same as children',()=>{
              const parent = new Pet('john');
              expect(parent.haveBaby()).toEqual(parent.children)
          })
          it('Test the name of the child',()=>{
            const parent = new Pet('john');
            parent.haveBaby('jim')
            expect(parent.children[0].name).toEqual('jim')
          })
      })
    });

})