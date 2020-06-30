const { src, dest, watch, parallel, series } = require('gulp')

const concat = require('gulp-concat')
const less   = require('gulp-less')
const jade   = require('gulp-jade')
const rename = require('gulp-rename')
const prefix = require('gulp-autoprefixer')
const bsync  = require('browser-sync').create()

const dir = {
    src:    './',
    core:   './core/',
    core_partials: [
        './core/mixins/*.less',
        './core/assets/*.less',
        './core/utilities/*.less'
    ],
    views:  './src/views/',
    styles: './src/styles/',
    webapp: './public/'
}

generateCore = done => {
    src(dir.core_partials)
        .pipe(concat('anchor.less'))
        .pipe(dest(dir.core))
    done()
}

generateViews = done => {
    src(dir.views + '*.jade')
        .pipe(jade({pretty: true}))
        .pipe(dest(dir.webapp))
    done()
}

generateStyles = done => {
    src(dir.styles + 'custom.less')
        .pipe(less())
        // .pipe(prefix({browsers: ['last 5 versions']}))
        .pipe(rename('main.css'))
        .pipe(dest(dir.webapp + 'css/'))
    done()
}

serve = () => {
    bsync.init({
        open: true,
        server: dir.webapp 
    })
}

reload = done => {
    bsync.reload(),
    done()
}

watchFiles = () => {
    watch(dir.core_partials, series(generateCore, reload)),
    watch(dir.views + '**/*.jade', series(generateViews, reload)),
    watch(dir.styles + '**/*.less', series(generateStyles, reload)),
    watch(dir.webapp + '**/*.{html,js,css}', series(reload))
}

exports.reload  = reload
exports.default = parallel(serve, watchFiles)