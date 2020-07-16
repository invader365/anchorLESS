const { src, dest, watch, parallel, series } = require('gulp')

const less   = require('gulp-less')
const jade   = require('gulp-jade')
const concat = require('gulp-concat');
const bsync  = require('browser-sync').create()

const dir = {
    example: './example/',
    views:   './src/views/',
    styles:  './src/styles/',
    public:  './public/'
}

const concatCore = done => {
    src([
        './core/mixins/**/*.less',
        './core/assets/**/*.less',
        './core/utilities/**/*.less'
    ])
        .pipe(concat('anchor.less'))
        .pipe(dest('./'))
    done()
}

const compileViews = done => {
    src(dir.views + '*.jade')
        .pipe(jade({pretty: true}))
        .pipe(dest(dir.public))
    done()
}

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
        watch(views + '**/*.jade', series(compileViews, reloadBrowser)),
        watch(base + '**/*.{html,js,css}', series(reloadBrowser))
    }
}

exports.anchor  = concatCore
exports.example = parallel(startServer(dir.example), watchFileChanges(dir.example, dir.example, 'styles.less', '', './'))
exports.default = parallel(startServer(dir.public), watchFileChanges(dir.public, dir.styles, 'custom.less', 'css/', dir.views))