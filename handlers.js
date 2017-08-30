var mongo = require('./mongoFunctions')
exports.verify = function(request) {
  return true
}

exports.insertValues = function(request){
  var arr=[request.body]
  console.log(arr)
  return mongo.functions.insert(arr)
}

exports.selectValues = function(filter){
  return mongo.functions.select(filter)
}

exports.truncate = function(){
  return mongo.functions.truncate()
}
