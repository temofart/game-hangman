var gulp = require('gulp');
var sass = require('gulp-sass');

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: 'app',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./app/scss/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./app/css'));
});

gulp.task('livereload', function (){
  gulp.src('./app/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*.scss', ['sass']);
  gulp.watch('./app/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
