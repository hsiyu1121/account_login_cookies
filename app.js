const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const accountCheck = require('./accountCheck')
const cookieParser = require('cookie-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser('123456789'))
app.engine('hbs', exphbs({defaultLayout:'main', extname:'.hbs'}))
app.set('view engine', 'hbs')
app.use(cookieParser('123'))
const port = 3000



app.get('/', (req, res) => {
  const email = req.body.email
  const array = req.body
  const loginCheck = accountCheck(array)
  if(req.signedCookies.login){
    let loginCheck = req.signedCookies.login
    res.render('login', {loginCheck})
  }else {
    res.render('index', {email})
  }
})

app.post('/', (req, res) => {
  const array = req.body
  const loginCheck = accountCheck(array)
  const email = req.body.email
  const name = req.body.name
  
  if(loginCheck.includes('帳號密碼錯誤')) {
    res.render('index', {loginCheck, email})
  }else{
    res.cookie('login', loginCheck, {path:'/', httpOnly: true, signed: true, maxAge: 60000}) //set cookie
    res.render('login',  {loginCheck, email, name}) 
  }
})

app.get('/logout', (req, res) => {
  res.clearCookie('login', { path: '/' })
  return res.redirect('/')
})


app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`);
})