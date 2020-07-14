const { src, dest, watch, parallel, series } = require('gulp')

const less   = require('gulp-less')
const bsync  = require('browser-sync').create()

function compileStyles(source, destination) {
    return done => {
        src(source)
            .pipe(less())
            .pipe(dest(destination))
        done()
    }
}

function startServer(base) {
    return () => {
        bsync.init({
            open: true,
            server: base 
        })
    }
}

const reloadBrowser = done => {
    bsync.reload(),
    done()
}

function watchFileChanges(base, styles, stylesSrc, stylesDest, views) {
    return () => {
        watch(styles + '**/*.less', series(compileStyles(styles + stylesSrc, base + stylesDest), reloadBrowser)),
        watch(base + '**/*.{html,js,css}', series(reloadBrowser))
    }
}

exports.example = parallel(startServer('./example/'), watchFileChanges('./example/', './example/', 'styles.less', '', './'))