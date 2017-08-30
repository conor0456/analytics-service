var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

var url = 'mongodb://localhost:27017';

exports.connect = function() {
  return new Promise(MongoClient.connect(url))
}
