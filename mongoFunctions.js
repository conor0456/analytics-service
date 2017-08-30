var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'


//mongo.connect('mongodb://localhost:27017').then((db)=>{console.log(db)})

//
//
// exports.insertDocuments = function(db, callback) {
//   var collection = db.collection('documents')
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n)
//     assert.equal(3, result.ops.length)
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   })
// }
//
//
// var collection = db.collection('documents');
// // Find some documents
// collection.find({}).toArray(function(err, docs) {
//   assert.equal(err, null);
//   console.log("Found the following records");
//   console.log(docs)
//   callback(docs);

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
  }





}

// var foo = async (function() {
//     var resultA = await (firstAsyncCall());
//     var resultB = await (secondAsyncCallUsing(resultA));
//     var resultC = await (thirdAsyncCallUsing(resultB));
//     return doSomethingWith(resultC);
// });
