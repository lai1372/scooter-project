const ScooterApp = require("./ScooterApp")

class User {
  // User code here
  #password
  #age
  constructor(username, password, age, loggedIn){
    this.username = username
    this.#password = password
    this.#age = age
    this.loggedIn = false
  }

  getPassword(){
    return this.#password
  }

  getAge(){
    return this.#age
  }

  login(password){
    const userpw = ScooterApp.registeredUsers
  }

  logout(){

  }
}

describe('Name of the group', () => {
  test('should ', () => {
    expect()
  });
});
// const register = new ScooterApp()
// register.registerUser("laila", "123pw", 27)
// const newuser = new User("laila", "123pw", 27)
// newuser.login("123pw")

module.exports = User
