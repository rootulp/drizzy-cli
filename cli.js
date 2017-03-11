#! /usr/bin/env node
'use strict';
const request = require('request');
const meow = require('meow');
const ora = require('ora');
const updateNotifier = require('update-notifier');


const DRIZZY_API = 'http://drizzy-server.herokuapp.com';

var cli = meow([
  'Usage',
  '  $ drizzy',
  ''
]);

updateNotifier({pkg: cli.pkg}).notify();

const spinner = ora().start();
request(DRIZZY_API + '/lyric', function (error, response, body) {
  spinner.stopAndPersist({
    "symbol": "🎧 ",
    "text": body
  });
});
