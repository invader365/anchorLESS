var gulp   = require('gulp');
var concat = require('gulp-concat');
var less   = require('gulp-less');
var prefix = require('gulp-autoprefixer');
var sync   = require('browser-sync').create();

gulp.task('anchorless', function() {
    gulp.src([
            './src/01. mixins/**/*.less',
            './src/02. assets/**/*.less',
            './src/03. utilities/**/*.less'
        ])
        .pipe(concat('anchor.less'))
        .pipe(gulp.dest('./'))
        .pipe(browse.stream());
});

gulp.task('example', function() {
    gulp.src('./example/*.less')
        .pipe(less())
        .pipe(prefix({browsers: ['last 5 versions']}))
        .pipe(gulp.dest('./example'))
        .pipe(browse.stream());
});

gulp.task('sync', function() {
    sync.init(null, {
        open: false,
        server: {
            baseDir: ['./example']
        }
    });
});

gulp.task('serve', function() {
    gulp.start(['anchor', 'less', 'sync']);
    gulp.watch("./**/*.less", ['anchorless', 'example']);
    gulp.watch("./example/*.html").on('change', sync.reload);
});