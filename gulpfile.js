const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const connect = require('gulp-connect');

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
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
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
