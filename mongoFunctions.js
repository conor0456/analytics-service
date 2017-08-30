var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

exports.functions = {
  insert: async function(values){
    var connection = await mongo.connect(url)
    var collection = await connection.collection('documents')
    return collection.insertMany(values)
  },
  select: async function(filter){
    var connection = await mongo.connect(url)
    var collection = await connection.collection('documents')
    return collection.find(filter).toArray()
  },
  truncate: async function(){
    var connection = await mongo.connect(url)
    var collection = await connection.collection('documents')
    return collection.drop()
  }
}
