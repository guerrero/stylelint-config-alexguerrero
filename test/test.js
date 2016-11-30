'use strict'

var fs = require('fs')
var path = require('path')
var stylelint = require('stylelint')

var repoRootPath = path.resolve(__dirname, '..')
var ignoredDirs = ['node_modules', 'test', '.git']
var testCode = '/* Test code */\n'

function isDir(dirname) {
  return file => file === path.resolve(dirname)
}

function exclude(dirs) {
  return file => !dirs
    .map(dir => isDir(dir))
    .some(isExcludedDir => isExcludedDir(file))
}

function flatten(arr) {
  return Array.isArray(arr) ? [].concat.apply([], arr.map(flatten)) : arr
}

function filterJSFiles(files) {
  return files.filter(file => path.extname(file) === '.js')
}

function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => err ? reject(err) : resolve(files))
  })
}

function iterateOverFoundFiles(files, callback) {
  return Promise.all(
    files.map(filepath => new Promise((resolve, reject) => {
      fs.stat(filepath, (err, stat) => {
        if (err) reject(err)

        if (stat.isDirectory()) return resolve(callback(filepath))

        return resolve(filepath)
      })
    }))
  )
}

function findRepoFiles(dir) {
  return readDir(dir)
    .then(files => files
      .map(file => path.join(dir, file))
      .filter(exclude(ignoredDirs))
    )
    .then(files => iterateOverFoundFiles(files, findRepoFiles))
}

function printError(error) {
  var errorInfo = error.name === 'StylelintError' ? error.message : error.stack

  console.log(errorInfo)
  process.exit(1)
}

function testStylelintFiles(file) {
  var options = {
    code: testCode,
    configFile: file,
    formatter: 'verbose'
  }

  return stylelint
    .lint(options)
    .then(result => {
      if (result.errored) {
        var error = new Error(result.output)
        error.name = 'StylelintError'
        throw error
      }

      return false
    })
}

findRepoFiles(repoRootPath)
  .then(flatten)
  .then(filterJSFiles)
  .then(files => files.forEach(testStylelintFiles))
  .catch()

process.on('unhandledRejection', printError)
