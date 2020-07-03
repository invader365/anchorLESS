'use strict'

const { src, dest, watch, parallel, series } = require('gulp')

const less = require('gulp-less')
const bsync = require('browser-sync').create()

const dir = {
    src:    './',
    example: './example/'
}

const styles = done => {
  src(dir.example + '*.less')
    .pipe(less())
    .pipe(dest(dir.example))
  done()
}

const serve = () => {
  bsync.init({
    open: true,
    server: './example/'
  })
}

const reload = done => {
  bsync.reload(), 
  done()
}

const watchFiles = () => {
  watch('./example/*.less', series(styles, reload)), 
  watch('./example/*.html', series(reload))
}

exports.default = parallel(serve, watchFiles)