var currentYear = new Date().getFullYear()

function Car(brand,year){
  this.brand = brand,
  this.year = year
}

Car.prototype.age = function(){
  console.log(`this car's age is ${currentYear-this.year}`)
}

let car1 = new Car('BMW',2016)
let car2 = new Car('TESLA',2017)

console.log(car1)
console.log(car2)
car1.age()
car2.age()