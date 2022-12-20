function UserFactory(role){
  function User(role,pages){
    this.role = role;
    this.pages = pages;
  }

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

let loginUser = new UserFactory('admin')
console.log(loginUser)



function bmwFactory(type) {
  if (type === 'X5')
    return new Bmw(type, 108000, 300);
  if (type === 'X6')
    return new Bmw(type, 111000, 320);
}

function Bmw(model, price, maxSpeed) {
  this.model = model;
  this.price = price;
  this.maxSpeed = maxSpeed;
}

let car1 = new bmwFactory('X5')
console.log(car1)




module.exports = {UserFactory,bmwFactory};

