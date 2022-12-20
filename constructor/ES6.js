var currentYear = new Date().getFullYear()

class Car{
  constructor(brand,year){
    this.brand = brand,
    this.year = year
  }

  age(){
    console.log(`this car's age is ${currentYear-this.year}`)
  }
}


let car1 = new Car('BMW',2016)
let car2 = new Car('TESLA',2017)

console.log(car1)
console.log(car2)
car1.age()
car2.age()