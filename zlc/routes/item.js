var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'zlc1'
})

/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  connection.query('SELECT title,name FROM zzz',function(err,rows,fields){
    res.send(rows)
  })
});

router.post('/page', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  connection.query('INSERT INTO zzz (title,name) VALUES("'+req.body.zl1+'","'+req.body.zl2+'")',function(err,rows,fields){
    res.send(rows)
  })
});


module.exports = router;
