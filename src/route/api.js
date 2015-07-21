/**
 * Create by Hansel on 15/5/22.
 *
 */

var express = require('express');
var path = require('path');

/**
 * Require controller
 */

var index = require(path.join(__dirname, '../controller/index'));
var user = require(path.join(__dirname, '../controller/user'));
var appcontroller = require(path.join(__dirname, '../controller/app'));
var admin = require(path.join(__dirname, '../controller/admin'));

/**
 * Export.

 * @param {object} app
 */

module.exports = function(app){

  app.route('/api/register')
    .post(user.signup) //注册

  app.route('/api/login')
    .post(user.login) //登录

  app.route('/api/reset-pasword')
    .post(user.resetPassword); // 重设密码

  app.route('/api/logout')
    .get(user.logout); // 退出登录

  app.route('/api/app-authorize/:appId')
    .post(appcontroller.authorize) //授权
    .delete(appcontroller.deleteAuthorize) //取消授权

};