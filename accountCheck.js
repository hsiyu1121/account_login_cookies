function accountCheck(array){
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  let name = ''
  let email = ''
  for(let i = 0; i < users.length; i++) {
    if(users[i].email === array.email && users[i].password === array.password ){
      name = users[i].firstName
      // email = users[i].email

      return  name //, email
    }
  }
  return '帳號密碼錯誤，重新輸入！！'
}

module.exports = accountCheck

