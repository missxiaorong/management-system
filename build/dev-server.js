require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
// /* datura接口 */
// var appData = require('../static/json/user.json')  /* 引入根目录下db.json数据文件 */
// var goodsData = require('../static/json/goods.json')
// var actData = require('../static/json/act.json')
// var orderData = require('../static/json/order.json')
// var sideData = require('../static/json/side.json')
// var authData = require('../static/json/auth.json')
// var logData = require('../static/json/log.json')
// var sideList = sideData.sideList
// var userSearchList = appData.userSearchList
// var userTableHead=appData.userTableHead
// var goodsSearchList = goodsData.goodsSearchList
// var goodsTableHead = goodsData.goodsTableHead
// var goodsAddList = goodsData.goodsAddList
// var actTableHead = actData.actTableHead
// var actAddList =actData.actAddList
// var orderSearchList = orderData.orderSearchList
// var orderTableHead = orderData.orderTableHead
// var navList=orderData.navList
// var navReturnList = orderData.navReturnList
// var roleTableHead =authData.roleTableHead
// var roleAddList =authData.roleAddList
// var adminTableHead = authData.adminTableHead
// var adminAddList = authData.adminAddList
// var logTableHead = logData.logTableHead
// var apiRoutes = express.Router()  /* 定义express.Router() 对象 */
// apiRoutes.get('/sideList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: sideList
//   })
// })
// apiRoutes.get('/userSearchList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: userSearchList
//   })
// })
// apiRoutes.get('/userTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: userTableHead
//   })
// })
// apiRoutes.get('/goodsSearchList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: goodsSearchList
//   })
// })
// apiRoutes.get('/goodsTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: goodsTableHead
//   })
// })
// apiRoutes.get('/goodsAddList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: goodsAddList
//   })
// })
// apiRoutes.get('/actTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: actTableHead
//   })
// })
// apiRoutes.get('/actAddList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: actAddList
//   })
// })
// apiRoutes.get('/orderSearchList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: orderSearchList
//   })
// })
// apiRoutes.get('/orderTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: orderTableHead
//   })
// })
// apiRoutes.get('/navList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: navList
//   })
// })
// apiRoutes.get('/navReturnList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: navReturnList
//   })
// })
// apiRoutes.get('/roleTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: roleTableHead
//   })
// })
// apiRoutes.get('/roleAddList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: roleAddList
//   })
// })
// apiRoutes.get('/adminTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: adminTableHead
//   })
// })
// apiRoutes.get('/adminAddList', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: adminAddList
//   })
// })
// apiRoutes.get('/logTableHead', function(req, res){   /* 定义接口并返回数据 */
//   res.json({
//     data: adminAddList
//   })
// })
// app.use('/api', apiRoutes)  
/* 定义接口在/api目录下，方便管理 */
/* datura接口 _end */
// mock数据
// var app = express()
// var appData = require('../data.json')
// var user = appData.user;//接口
// API
// var apiRouter = express.Router();

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
