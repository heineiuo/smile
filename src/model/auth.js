/**
 * �û���Ӧ����Ȩ��ϵ��
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
