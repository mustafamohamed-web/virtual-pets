function Pet(name, age){
    this.name = name;
    this.age = age;
    };
  
  Pet.prototype = {
    growUp : function() {this.age += 1;}
  }
  
  const pet = new Pet('Fido', 10)
  const rex = new Pet('Rex', 5)
  
  rex.growUp = function(){
    this.age += 5;
  }
  
  rex.growUp()
  rex.growUp()
  
  pet.growUp = function(){
    this.age+=10
  }



module.exports = Pet;