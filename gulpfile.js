var gulp = require('gulp'),
    options = {
      src: './src',
      dest: './public'
    },
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    compress = require('gulp-compress');
  
gulp.task('develop', function (done) {
  var stream = nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          , done: done
        })
          
  
  stream
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
          stream.emit('restart', 10)  // restart the server in 10 seconds
      })
})

 
gulp.task('livereload', function() {
  gulp.src(['/public/scss/*.scss', '/public/scripts/*.js'])
  .pipe(watch('/public/scss/*.scss'))
  .pipe(watch('/public/js/*.js'))
  .pipe(connect.reload());
});
 
gulp.task('sass', function() {
  gulp.src('/src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/scss'));
});

gulp.task('modernizr', function() {
    gulp.src('./src/js/*.js')
    .pipe(watch('/public/js/*.js'))
    .pipe(modernizr())
    .pipe(gulp.dest("/public/js"))
  });
 
  gulp.task('compress', function () {
    return gulp.src(['/src/js/main.js','/src/js/munchkin.js'])
    .pipe(gulp.dest("/public/js"))
});

gulp.task('watch', function() {
    gulp.watch('/public/scss/**/*.scss', ['scss']);
    gulp.watch('/public/js/*.js', ['compress']);
    gulp.watch('/public/img/images/*', ['images']);
})


gulp.task('default',gulp.series(['sass', 'livereload', 'compress', 'watch', 'nodemon']));