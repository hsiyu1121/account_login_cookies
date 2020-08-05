const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountCheck = require('./accountCheck')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.engine('hbs', exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine', 'hbs')

const port = 3000

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const loginCheck = accountCheck(email, password)

  if(loginCheck.includes('帳號密碼錯誤')) {
    res.render('index', {loginCheck, email, password})
  }else{
    res.render('login', {loginCheck, email, password})
  }
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`);
})