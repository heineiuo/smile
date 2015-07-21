/**
 * Created by Hansel on 15/5/22.
 */

var path = require('path')

var conf = {
  "port": 8452,
  "name": "smile"
}

var app = require(path.join(__dirname, './src/index'))(conf)