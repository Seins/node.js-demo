var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var util = require('util'),
    https = require('https'),
    http = require('http'),
    url = require('url');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: '投票App', charset: 'utf-8', data: ''});
});

router.get("/web/cache", function (req, res) {
    var req = http.get({
        host: 'translate.cdmates.com',
        path: '/translate/google/en/zh_CN',
        data: {
            value: 'translate test'
        }
    }, function (r) {
        console.log('STATUS: ' + r.statusCode);
        console.log('HEADERS: ' + JSON.stringify(r.headers));
        r.setEncoding('utf8');
        r.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
            res.write(chunk);
        });
    })
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
})

module.exports = router;
