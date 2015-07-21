/**
 * Created by Hansel on 15/5/23.
 */

var express = require('express')
var path = require('path')
var fs = require('fs')
var mongoose = require('mongoose')
var aysnc = require('async')
var _ = require('lodash')

var App = mongoose.model('App')

/**
 * ��ȡAPP��Ϣ
 * @param req
 * @param res
 * @param next
 * @param id
 */
exports.getAppById = function(req, res, next, id) {
  App.findById(Object(id), function(err, app){
    if (err) {
      return res.json({error: 10001})
    }

    if (app == null) {
      return res.json({error: 10002})
    }

    req.app = app;
    next()

  })

}


/**
 * �û���app��Ȩ
 * @param req
 * @param res
 */
exports.authorize = function(req, res){

  res.json({

  })

}

/**
 * �û�ȡ����app��Ȩ
 * @param req
 * @param res
 */
exports.deleteAuthorize = function(req, res){

  res.json({

  })

}