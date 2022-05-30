const express = require('express')
const app = express()
const dataBase = require('./models')
const async = require('hbs/lib/async')
const bodyParser = require('body-parser')
const { Product, User } = require('./models')



app.set('view engine', 'hbs')
app.set('view options', {
    layout: 'layout/main'
})
console.log(Product)
console.log(User)
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/' , async function(req,res){
    let users = await User.findAll({include:Product})
    res.render('index' , {users})
    console.log(users[0])
})

app.get('/', async function (req, res) {
    let user = await dataBase.User
    res.render('index', { user })
    console.log(user)
})

app.get('/product' , async function(req,res){
    let product = await Product.findAll({include:User})
    res.render('product' , {product})
    console.log(product[0])
})

app.get('/product',async function (req, res) {
    let prod = await dataBase.Product
    res.render('product' , {prod})
    console.log(prod);
})


app.listen(5050)