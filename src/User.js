class User {
  // User code here
  #username
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
}
  
module.exports = User
