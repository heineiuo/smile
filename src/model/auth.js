/**
 * 用户与应用授权关系表
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var _ = require('lodash')


var AuthSchema = new Schema({

  appId: {
    type: String,
    default: ""
  },

  userId: {
    type: String,
    default: ""
  }

})


mongoose.model('Auth', AuthSchema)
