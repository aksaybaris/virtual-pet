function Pet(name) {
    this.name = name;
    this.age = 0;
};

Pet.prototype.growUp = function(){
    return this.age++;
}


module.exports = Pet;