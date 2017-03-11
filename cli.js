#! /usr/bin/env node
'use strict';
var request = require('request');
var meow = require('meow');
var updateNotifier = require('update-notifier');

const DRIZZY_API = 'http://drizzy-server.herokuapp.com';

var cli = meow([
  'Usage',
  '  $ drizzy',
  ''
]);

updateNotifier({pkg: cli.pkg}).notify();

request(DRIZZY_API + '/lyric', function (error, response, body) {
  console.log(body);
});
