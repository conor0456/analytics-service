var express = require('express')
var mongo = require('./mongoFunctions')
var handlers = require('./handlers.js')
var bodyParser = require('body-parser')
var app = express()

app.use( bodyParser.json() )       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))

//START SERVER
app.listen(3000, ()=>{
  console.log('server started on 3000')
})

app.post('/select', async function(req, res){
  var filter = req.body
  console.log('FILTER:',filter)
  if(handlers.verify(req)){
    var response = await handlers.selectValues(filter)
  }
  console.log(response)
  res.send(response)
})

app.get('/selectAll', async function(req, res){
  var response = await handlers.returnValues({})
  console.log(response)
  res.send(response)
})

app.get('/truncate', async function(req, res){
  var response = await handlers.truncate()
  res.send(response)
})

app.post('/insert', async function(req, res){
  if(handlers.verify(req)){
    var result = await handlers.insertValues(req)
    console.log('Insert Finished')
    res.send(result)
  }
})
