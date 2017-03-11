#! /usr/bin/env node
'use strict';
var request = require('request');

const DRIZZY_API = 'http://drizzy-server.herokuapp.com'

request(DRIZZY_API + '/lyric', function (error, response, body) {
  console.log(body);
});
