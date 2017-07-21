/**
 * Created by chenzhengguo on 2015/7/30.
 * Updated by chenzhengguo on 2016/1/28.
 */
var path = require('path');
var fs = require('fs');
var mock = require("mockjs");
var app = require('express')();
var port = process.argv.slice(2)[0] || 8080;
var getIP = function() {
  var os = require('os');
  var IPv4 = '127.0.0.1';
  var interfaces = os.networkInterfaces();
  for (var key in interfaces) {
    interfaces[key].some(function(details){
      if (details.family == 'IPv4' && key == 'en33') {
        IPv4 = details.address;
        return true;
      }
    });
  }
  return IPv4;
};
var HOST =  getIP();
var uri = 'http://' + HOST + ':' + port;
var server = app.listen(port, HOST, function() {
  console.info(uri);
});

const prefix = '/api';

var api = {};
var apiPath = path.join(__dirname, './api.json');
function getApis() {
  fs.readFile(apiPath, 'utf-8', function(err, content) {
    api = JSON.parse(content);
  });
}
//监听api.json变化
fs.watchFile(apiPath, function(curr) {
  console.log('API is updated.', curr.mtime);
  getApis();
});
getApis();

//支持callback
/*app.set('jsonp callback name', 'callback');*/
app.use(function(req, res) {
  console.log(req.query)
  var data = undefined;
  var delay = 0;
  for(var group in api) {
    if(api[group].find(function(reqData) {
      if(req.originalUrl.indexOf(prefix + reqData.url) !== 0) {
        return false;
      }
      var apiRes = reqData.res;
      console.log(reqData.url);
      if (reqData.url === '/kg/host_list') {
        let mockData= mock.mock(apiRes)
        mockData.data.list = mockData.data.list.slice((req.query.page - 1) * req.query.num, req.query.page * req.query.num)
        mockData.data.page = parseInt(req.query.page)
        data = reqData.mock ? mockData : apiRes;
      } else {
        data = reqData.mock ? mock.mock(apiRes) : apiRes;
      }
      delay = reqData.delay || 0;
      return true;
    }) !== undefined) {
      break;
    }
  }
  data !== undefined ? setTimeout(() => res.json(data), delay) : res.sendStatus(404);
});