const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("returns name property", () => {
  it("should return the name of pet", () => {
    const pet = new Pet("fido");
    expect(pet.name).toEqual("fido");
  });
});

describe("increment the age of pet by 1", () => {
  it("age is increased by 1", () => {
    const pet = new Pet();
    pet.growUp();
    expect(pet.age).toBe(1);

    pet.age = 999;
    pet.growUp();
    expect(pet.age).toBe(1000);
  });
});

describe("fitness & hunger changes", () => {
  it("should decrement fitness by 3 and increment hunger by 5", () => {
    const pet = new Pet();
    pet.growUp();
    expect(pet.fitness).toBe(7);
    expect(pet.hunger).toBe(5);
  });
});


describe("walking increases fitness",()=>{
  it("should increase fitness by 4 when fitness is below or equal to 6",()=>{
    const pet = new Pet();
    pet.fitness = 5;
    pet.walk();
    expect(pet.fitness).toBe(9);

    pet.fitness = 6;
    pet.walk();
    expect(pet.fitness).toBe(10);

    pet.fitness = 7;
    pet.walk();
    expect(pet.fitness).toBe(10);

    pet.fitness = 10;
    pet.walk();
    expect(pet.fitness).toBe(10);

  });
});


    describe('hunger decrease function', () => {
      it("should decrease hunger by 3", () =>{
      const pet = new Pet();
      pet.hunger = 7;
      pet.feed();
      expect(pet.hunger).toBe(4);
      })

      it("should keep hunger at 0 if hunger-3 is smaller than minHunger", ()=>{
        const pet = new Pet();
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toBe(0);

      });
  
    });

