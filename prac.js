function Dog(name){
this.name=name;
}


const dog1=new Dog('fluffy');


Dog.prototype.toString=function dogtostring(){
    return `${this.name}`
}


console.log(dog1.toString());