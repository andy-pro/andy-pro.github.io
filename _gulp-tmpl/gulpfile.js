'use strict';

const gulp = require('gulp'),
      watch = require('gulp-watch'),
      sass = require('gulp-sass'),
      cssimport = require("gulp-cssimport"),
      cleanCSS = require('gulp-clean-css'),
      urlAdjuster = require('gulp-css-url-adjuster'),
      // url = require('gulp-css-url'),
      prefixer = require('gulp-autoprefixer'),
      // extender = require('gulp-html-extend'),
      concat = require('gulp-concat'),
      // fileinclude = require('gulp-file-include'),
      include = require('gulp-include'),
      uglify = require('gulp-uglify'),
      pug = require('gulp-pug');
      // jade = require('gulp-jade');

const bd = '../public/bower_components/',
      dest = 'dist-gulp/';

const path = {
  src: {
    css: 'frontend/main.scss',
    js: 'frontend/main.js',
    html: 'frontend/index.pug',
    img: 'frontend/**/*.{jpg,jpeg,png,svg}'
    // view: 'frontend/view/*.{pug,jade}',
    // html: 'frontend/*.html'
  },
  dest: {
    css: 'dist/css',
    js: 'dist/js',
    html: './',
    img: 'dist/img'
    // view: 'dist/view/',
  },
  watch: {
    css: 'frontend/**/*.scss',
    js: 'frontend/**/*.js',
    // html: 'frontend/**/*.{pug,jade}'
    html: 'frontend/**/*.pug',
    img: 'frontend/**/*.{jpg,jpeg,png,svg}'
    // view: 'frontend/**/*.{pug,jade}',
    // html: ['frontend/**/*.html', 'dist/view/*.html']
  }
};

gulp.task('html:build', () => gulp
  .src(path.src.html)
  .pipe(pug())
  // .pipe(extender({annotations: false}))
  .pipe(gulp.dest(path.dest.html))
);

gulp.task('css:build', () => gulp
  .src(path.src.css)
  // .on('data', function(file) { console.log(file); })
  .pipe(sass())
  .pipe(cssimport())
  // .pipe(prefixer({browsers:['ie >= 10', 'ff >= 5', 'Opera >= 15', 'last 2 Chrome versions']}))
  // .pipe(prefixer())
  .pipe(urlAdjuster({prepend: '../img/'}))
  // .pipe(urlAdjuster({prependRelative: '../img/'}))
  // .pipe(url({mode: 'absolute', base: 'img'}))
  // .pipe(cleanCSS({keepSpecialComments: 0}))
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(path.dest.css))
);

gulp.task('js:build', () => gulp
  .src(path.src.js)
  // .pipe(fileinclude())
  // .pipe(include({extensions: '!{.min.js}'}))
  // .pipe(include({includePaths: __dirname + '/frontend'}))
  .pipe(include())
  // .pipe(uglify())
  .pipe(gulp.dest(path.dest.js))
);

gulp.task('img:build', () => gulp
  .src(path.src.img)
  .pipe(gulp.dest(path.dest.img))
);

gulp.task('build', [
  'css:build',
  'js:build',
  'html:build',
  'img:build'
]);

gulp.task('watch', () => {
  watch(path.watch.css,  () => gulp.start('css:build'));
  watch(path.watch.js,   () => gulp.start('js:build'));
  watch(path.watch.html, () => gulp.start('html:build'));
  watch(path.watch.img,  () => gulp.start('img:build'));
});

gulp.task('default', ['build', 'watch']);
