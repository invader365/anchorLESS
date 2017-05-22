var gulp   = require('gulp');
var less   = require('gulp-less');
var jade   = require('gulp-jade');
var browse = require('browser-sync').create();
var prefix = require('gulp-autoprefixer');
 
gulp.task('index', function() {
  gulp.src(['./src/index.jade'])
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./'))
    .pipe(browse.stream());
});
 
gulp.task('jade', function() {
  gulp.src(['./src/templates/*.jade'])
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./html'))
    .pipe(browse.stream());
});

gulp.task('less', function() {
    gulp.src([
            './src/less/*.less',
            '!./src/less/anchor.less',
            '!./src/less/variables.less'
            ])
        .pipe(less())
        .pipe(prefix({browsers: ['last 5 versions']}))
        .pipe(gulp.dest('./css'))
        .pipe(browse.stream());
});

gulp.task('browse', function() {
    browse.init(null, {
        open: false,
        server: {
            baseDir: ['./']
        }
    });
});

/* gulp.task('fonts', function() {
    gulp.src('./bower_components/font-awesome/fonts/oo/o.{ttf,woff,woff2,eot,svg}')
        .pipe(gulp.dest('./fonts'))
}); */ 
// gulp start ['fonts']

gulp.task('serve', function() {
    gulp.start(['index', 'jade', 'less', 'browse']);
    gulp.watch("./src/less/*.less", ['less']);
    gulp.watch("./src/**/*.jade", ['jade']);
    gulp.watch("./src/index.jade", ['index']);
});