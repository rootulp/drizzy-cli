#! /usr/bin/env node
'use strict';
var request = require('request');
var meow = require('meow');

const DRIZZY_API = 'http://drizzy-server.herokuapp.com'

var cli = meow([
  'Usage',
  '  $ drizzy',
  ''
]);

request(DRIZZY_API + '/lyric', function (error, response, body) {
  console.log(body);
});
