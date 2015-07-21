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
 * 获取APP信息
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
 * 用户对app授权
 * @param req
 * @param res
 */
exports.authorize = function(req, res){

  res.json({

  })

}

/**
 * 用户取消对app授权
 * @param req
 * @param res
 */
exports.deleteAuthorize = function(req, res){

  res.json({

  })

}