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


// app.post('/', function(req, res) {
//     if(handlers.verify(req)){
//       Object.keys(req.body).forEach((value)=>{
//         console.log(value)
//       })
//     }
// })
var gotEm = async function(){
    //await mongo.functions.insert([{a : 1}, {a : 2}, {a : 3}]).then(console.log)
    await mongo.functions.select({a:1}).then(console.log)

}

gotEm()
