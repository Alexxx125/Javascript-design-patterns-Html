class NavBar{
  init(){
    console.log('NavBar-init')
  }

  getData(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('data');
      }, 2000);
      // here can use ajax or axios to grab data
    });
  }

  render(data){
    console.log('NavBar',data)
  }
}
class Header{
  init(){
    console.log('Header-init')
  }

  getData(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('data');
      }, 2000);
      // here can use ajax or axios to grab data
    });
  }

  render(data){
    console.log('Header',data)
  }
}

async function bulid(element){
  element.init()
  const result = await element.getData()
  element.render(result)
}

let navBar = new NavBar()
let header = new Header()
bulid(navBar)
bulid(header)
