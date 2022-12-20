function Superadmin(name){
      this.name = name;
      this.role = 'superadmin';
      this.pages = ['home','super-manage','user-manage','news-manage'];
    }

Superadmin.prototype.addAdmin=function(name){
      return new Admin(name);
    }


function Admin(name){
      this.name = name;
      this.role = 'admin';
      this.pages = ['home','user-manage','news-manage'];
    }

function Editor(name){
      this.name = name;
      this.role = 'editor';
      this.pages = ['home','news-manage'];
    }

function getUserClass(role){
    switch(role){
      case 'superadmin':
        return Superadmin;
      case 'admin':
        return Admin;
      case 'editor':
        return Editor;
      default:
        throw new Error('wrong user')
    }
}

let UserClass = getUserClass('superadmin')
let user = new UserClass('kevin')
let newAdmin = user.addAdmin('Alex')
console.log(newAdmin)

