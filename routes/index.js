var express = require('express');
var router = express.Router();
//mongodb+srv://main_admin:7kvxfrqBKl899TJQ@main.rhunr.mongodb.net/SR-studio?retryWrites=true&w=majority
/* GET home page.
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://main_admin:7kvxfrqBKl899TJQ@main.rhunr.mongodb.net/SR-studio?retryWrites=true&w=majority&useUnifiedTopology=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("main").collection("sample_analytics");

  let user = {name: "Tom", sex:'none', age: 23};
  collection.insertOne(user, function(err, result){

    if(err){
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });

});


 */
/* GET home page. */
router.get('/', function(req, res, next) {
  let dat = new Date();

  res.render('index', {date : dat.getHours()});
});
router.get('/news', function(req, res, next) {
  let dat = new Date();

  res.render('news', {date : dat.getHours()});
});

router.get('/services', function(req, res, next) {
  let dat = new Date();

  res.render('services', {date : dat.getHours()});
});

router.get('/aboutus', function(req, res, next) {
  let dat = new Date();

  res.render('aboutus', {date : dat.getHours()});
});


module.exports = router;
