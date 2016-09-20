'use strict';

const gulp = require('gulp'),
      watch = require('gulp-watch'),
      cleanCSS = require('gulp-clean-css'),
      urlAdjuster = require('gulp-css-url-adjuster'),
      prefixer = require('gulp-autoprefixer'),
      extender = require('gulp-html-extend'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');

const bd = '../public/bower_components/',
      dest = 'dist-gulp/';

const path = {
  styles: [
    bd + 'normalize-css/normalize.css',
    bd + 'chosen/chosen.css',
    'frontend/styles.css',
    'frontend/*/*.css'
  ],
  scripts: [
    bd + 'chosen/chosen.jquery.js',
    bd + 'jquery-color/dist/jquery.color.plus-names.min.js',
    '../public/js/animate.js',
    'frontend/*/*.js',
    'frontend/*.js'
  ],
  images: [
    bd + 'chosen/chosen-sprite.png'
  ],
  htmls: [
    'frontend/index-gulp.html'
  ],
  watch: {
    styles: 'frontend/**/*.css',
    scripts: 'frontend/**/*.js',
    htmls: 'frontend/**/*.html'
  }
};

gulp.task('styles:build', () => gulp
  .src(path.styles)
  .pipe(prefixer({browsers:['ie >= 10', 'ff >= 5', 'Opera >= 15', 'last 2 Chrome versions']}))
  .pipe(urlAdjuster({prepend: '../img/'}))
  .pipe(cleanCSS({keepSpecialComments: 0}))
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest(dest + 'css'))
);

gulp.task('scripts:build', () => gulp
  .src(path.scripts)
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(dest + 'js'))
);

gulp.task('images:build', () => gulp
  .src(path.images)
  .pipe(gulp.dest(dest + 'img'))
);

gulp.task('htmls:build', () => gulp
  .src(path.htmls)
  .pipe(extender({annotations: false}))
  .pipe(gulp.dest('./'))
);

gulp.task('build', [
  'styles:build',
  'scripts:build',
  'images:build',
  'htmls:build'
]);

gulp.task('watch', () => {
  watch([path.watch.styles], () => gulp.start('styles:build'));
  watch([path.watch.scripts], () => gulp.start('scripts:build'));
  watch([path.watch.htmls], () => gulp.start('htmls:build'));
});

gulp.task('default', ['build', 'watch']);
