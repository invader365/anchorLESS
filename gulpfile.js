var gulp   = require('gulp');
var concat = require('gulp-concat');
var less   = require('gulp-less');

gulp.task('less', function() {
    gulp.src([
            './src/intro.less',
            './src/01. mixins/**/*.less',
            './src/02. assets/**/*.less',
            './src/03. utilities/**/*.less'
        ])
        .pipe(concat('anchor.less'))
        .pipe(gulp.dest('./'));
    gulp.start(['less']);
});

gulp.task('serve', function() {
    gulp.watch("./src/**/*.less", ['less']);
});