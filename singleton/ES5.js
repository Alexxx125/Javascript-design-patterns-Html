function Person() {

  if (typeof Person.instance === 'object')
    return Person.instance;

  Person.instance = this;

  return this;
}


let Singleton = function(){
  let instance;

  function User(name,email){
      this.name = name;
      this.email = email;
  }

  return function(name,email){
    if(!instance){
      instance = new User(name,email)
    }
    return instance
  }
}

let createUser = Singleton()
let user1 = createUser('Alex','123@gmail.com')
// only store once
let user2 = createUser('Jack','246@gmail.com')
let user3 = createUser('Ted','789@gmail.com')
console.log(user1,user2,user3,user1===user2,user1===user3,user2===user3)


