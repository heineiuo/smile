/**
 * ”¶”√
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');


var AppSchema = new Schema({

  appname: String,

  user_id: String,

  time: {
    type: Date,
    default: Date.now
  },

  key: String,

  secret: String,

  homepage: String




});


mongoose.model('App', AppSchema);

