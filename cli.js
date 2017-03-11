#! /usr/bin/env node
'use strict';
const request = require('request');
const meow = require('meow');
const chalk = require('chalk');
const ora = require('ora');

const DRIZZY_API = 'http://drizzy-server.herokuapp.com';

const cli = meow([
  'Usage',
  '  $ drizzy',
  ''
]);

const spinner = ora().start();
request(DRIZZY_API + '/lyric', function (error, response, body) {
  spinner.stopAndPersist({
    symbol: '🎧 ',
    text: chalk.blue(body)
  });
});
