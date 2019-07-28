var express = require('express')
var app = express()
var PORT = 4000 || process.env.PORT
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Stock = require('./db/models/stock')

var dbURI = require('./db/config')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



mongoose.connect(dbURI,
  {
    useNewUrlParser: true
  }, (err, db) => {
    if (err !== null) {
      console.log('DataBase connection error', err)
    } else {
      console.log('Database connected')
    }
  })

app.get('/api/getstocks', (req, res) => {
  Stock.find().then((stocks) => {
    res.send(stocks)
  }).catch((err) => {
    res.send('No stocks Exists')
  })
})

app.post('/api/updatestocks', (req, res) => {
  var updatedStock = req.body
  let newStock = new Stock({
    date: updatedStock.date,
    close: Number(updatedStock.close)
  })
  newStock.save().then((data)=>{
    console.log(data)
    res.send('Successfully updated')
  }).catch((err) => {
    res.send(`Not updated`)
  })
})


app.listen(PORT, () => {
  console.log(`Listig to port ${PORT}`)
})