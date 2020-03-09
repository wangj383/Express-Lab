const express = require('express')
const path = require('path')
const foodDb = require('./data/food-db')

const app = express()

app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

app.get('/foodOptions', function(req,res){
    res.render('foodOptions/index',{
        foodOptions: foodDb.getAll()
    })
})

app.listen(3000,function(){
    console.log('Listening on port 3000')
})

