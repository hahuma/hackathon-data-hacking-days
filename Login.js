export default class Login {
  constructor(email, password, isLogged = false) {
    this.email = email
    this.password = password
    this.isLogged = isLogged
  }


  login(){
    const savedEmail = localStorage.getItem('email')
    const savedPassword = localStorage.getItem('password')

    if(savedEmail !== this.email || savedPassword !== this.password) {
      this.isLogged = false
      return alert('Dados informados estão incorretos!')
    }

    this.isLogged = true

    alert('Usuário logado!')
    
    return this
  }

  static signin(email, name, password){
    if(!email || !name || !password) {
      return alert('Complete todos os campos!')
    }

    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)

    alert('Usuário criado!')

    return new Login(email, password, true)
  }

  logout() {
    this.email = null
    this.password = null
    this.isLogged = false

    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('name')

    alert('Usuário deslogado com sucesso!')
  }
}