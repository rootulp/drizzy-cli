#! /usr/bin/env node
'use strict'
const requestPromise = require('request-promise')
const meow = require('meow')
const chalk = require('chalk')
const ora = require('ora')
const updateNotifier = require('update-notifier')
const pkg = require('./package.json')

const DRIZZY_API = 'http://drizzy-server.herokuapp.com'

meow([
  'Usage',
  '  $ drizzy',
  ''
])

updateNotifier({pkg}).notify()

const spinner = ora().start()
const options = {
  method: 'GET',
  uri: DRIZZY_API + '/lyric'
}

requestPromise(options)
  .then((lyric) => {
    spinner.stopAndPersist({
      symbol: '🎧 ',
      text: chalk.blue(lyric)
    })
  })
  .catch((error) => {
    spinner.fail(error)
  })
