const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('returns name property', () => {
      it('should return the name of pet', ()=>{
        const pet = new Pet ("fido");
        expect(pet.name).toEqual("fido")
      })


  })


  describe ('increment the age of pet by 1', () =>{
      it('age is increased by 1', ()=>{
        const pet = new Pet()
        pet.growUp();
        expect(pet.age).toBe(1);
        
        pet.age=999;
        pet.growUp()
        expect(pet.age).toBe(1000)
      })
  })