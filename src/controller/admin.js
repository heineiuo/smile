/**
 * Created by Hansel on 2015-06-06 16:33:20.
 */

var express = require('express')
var path = require('path')
var fs = require('fs')
var mongoose = require('mongoose')
var aysnc = require('async')
var _ = require('lodash')

var Admin = mongoose.model('Admin')


exports.requireAdmin = function(req, res, next){
  next()
}

exports.getAdminById = function(req, res, next) {

  req.admin = {}
  next()

}

exports.renderAdmin = function(req, res){

  res.html({
    title: "Smile Admin"
  })

}