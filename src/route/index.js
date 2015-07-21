/**
 * Create by Hansel on 15/5/22.
 *
 */

var express = require('express')
var path = require('path')

/**
 * Require controller
 */

var index = require(path.join(__dirname, '../controller/index'))
var user = require(path.join(__dirname, '../controller/user'))
var appcontroller = require(path.join(__dirname, '../controller/app'))
var admin = require(path.join(__dirname, '../controller/admin'))


/**
 * Export.
 * @param {object} app
 */

module.exports = function(app){


  app.route(['/', '/app', '/people', '/i',
    '/login', 'register','/reset-pasword', '/app/:appId',
    '/app/:appId', '/search', '/signup', '/register'
  ])
    .get(index.renderIndex)


  app.route('/robots.txt')
    .get(index.renderRobots)


  /**
   * get 渲染登录后台页面
   */
  app.route(['/adminlogin/:adminToken', '/admin', '/admin/app'])
    .get(admin.renderAdmin)


  /**
   * 预解析管理员ID
   */
  app.param('adminToken', admin.getAdminById)
  app.param('appId', appcontroller.getAppById)


}

