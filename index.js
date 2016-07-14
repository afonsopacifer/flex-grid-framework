var stylus = require('stylus')
  , path = require('path')
  , nodes = stylus.nodes
  , utils = stylus.utils

exports = module.exports = function () {
  return function (style) {
    style.include(__dirname)
  }
}

exports.version = require(path.join(__dirname, 'package.json')).version
exports.path = __dirname
