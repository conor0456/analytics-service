var MongoClient =

var url = 'mongodb://localhost:27017';

exports.connect = function() {
  return MongoClient.connect(url)
}
