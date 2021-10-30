let maxFitness = 10;
let minHunger = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function(){
    return this.age++, this.hunger+=5, this.fitness-=3;    
}

Pet.prototype.walk = function(){
    if ((this.fitness + 4) <= maxFitness ) {
        this.fitness += 4;
      } else {
        this.fitness = maxFitness;
}
}

Pet.prototype.feed = function(){
    if ((this.hunger -3) >= minHunger){
        this.hunger -=3;
    } else {
        this.hunger = minHunger;
    }
}

/*{
    if(this.fitness <= 6){
        this.fitness = this.fitness+=4;
        return this.fitness;
    } else if (this.fitness > 6 && this.fitness<10){
        this.fitness = this.fitness+=1;
        return this.fitness;
    } else{
        return this.fitness;
    }
}*/


module.exports = Pet;