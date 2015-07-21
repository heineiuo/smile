/**
 * appuser
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');

/**
 * Appuser
 */
var AppUserSchema = new Schema({

  name: {
    type: String,
    default: ""
  },

  password: {
    type: String,
    default: ""
  },

  registertime: {
    type: Number,
    default: 0
  },

  token: {
    type: String,
    default: ""
  }

});


mongoose.model('AppUser', AppUserSchema);

