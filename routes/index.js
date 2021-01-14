const express = require('express');
const router = express.Router();
const https = require('https');
let listItems;

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

https://api.vk.com/method/wall.get?owner_id=-201752528&access_token=6700074d6700074d6700074d7f6775e75f667006700074d38fc32d5c76f2ef6005cde93&v=5.126


 */
function getPost(){
  https.get('https://api.vk.com/method/wall.get?owner_id=-201752528&access_token=6700074d6700074d6700074d7f6775e75f667006700074d38fc32d5c76f2ef6005cde93&v=5.126', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      listItems = JSON.parse(data).response.items;


    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}

getPost()


router.get('/', function(req, res, next) {

  res.render('index', {});
});


router.get('/news', function(req, res, next) {
  getPost();
  res.render('news', {listPosts: listItems});
});

router.get('/services', function(req, res, next) {


  res.render('services', {});
});

router.get('/aboutus', function(req, res, next) {


  res.render('aboutus', {});
});


module.exports = router;
