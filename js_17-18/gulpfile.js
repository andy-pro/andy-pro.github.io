'use strict';

const gulp = require('gulp'),
      dest = 'dest-gulp/';

gulp.task('css', function() {
  return gulp.src('frontend/**/*.css')
    .pipe(gulp.dest(dest + 'css'));
});

gulp.task('js', function() {
  return gulp.src('frontend/**/*.js')
    .pipe(gulp.dest(dest + 'js'));
});

gulp.task('default', ['css', 'js']);

// gulp.task('default', function() {
//   return gulp.src('frontend/**/*.*')
//     .on('data', function(file) {
//       // console.log(file.path);
//     })
//     .pipe(gulp.dest(function(file) {
//       console.log(file.name);
//       var ext = file.extname;
//       // console.log(ext);
//       return 'dist-gulp/' + (ext === '.css' ? 'css' :
//         ext === '.js' ? 'js' : '');
//     }));
// });
