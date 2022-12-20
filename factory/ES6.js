class User{
  constructor(role,pages){
    this.role = role;
    this.pages = pages;
  }

  sayHi(){
    console.log('hi',this.role)
  }

  static SayHi(){
    // console.log(this)
    // console.log(this.sayHi())
  }

  static UserFactory(role){
    switch(role){
      case 'superadmin':
        return new User(role,['home','user-manage','super-manage','news-manage']);
        break;
      case 'admin':
        return new User(role,['home','user-manage','news-manage']);
        break;
      case 'editor':
        return new User(role,['home','news-manage']);
        break;
      default:
        throw new Error('wrong user-role')
  }
  }
}

let loginUser = User.UserFactory('admin')
console.log(loginUser)


class Bmw{
  constructor(model, price, maxSpeed){
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }

  static BmwFactory(type){
    if (type === 'X5')
      return new Bmw(type, 108000, 300);
    if (type === 'X6')
      return new Bmw(type, 111000, 320);
  }
}

let car1 = Bmw.BmwFactory('X5')
console.log(car1)
