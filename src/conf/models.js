/**
 * Models
 * @type {string[]}
 */

var path = require('path')


module.exports = [
  path.join(__dirname, '../model/admin'),
  path.join(__dirname, '../model/app'),
  path.join(__dirname, '../model/appuser'),
  path.join(__dirname, '../model/user')
]