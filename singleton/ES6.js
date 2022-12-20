class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}



class Singleton{
    constructor(name,email){
      if(!Singleton.instace){
        this.name = name;
        this.email = email;
        Singleton.instace = this
      }

      return Singleton.instace
    }
}

let user1 = new Singleton('Alex','123@gmail.com')
let user2 = new Singleton('Jack','246@gmail.com')
let user3 = new Singleton('Ted','789@gmail.com')
console.log(user1,user2,user3)