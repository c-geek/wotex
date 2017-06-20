"use strict";

const fs = require('fs')
const path = require('path')
const route = require('./lib/route');

module.exports = {

  duniter: {},

  duniterUI: {
    inject: {
      menu: fs.readFileSync(path.join(__dirname, 'injection/menu.js'), 'utf8')
    },
    route
  }
}
