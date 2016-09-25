'use strict';

const gulp = require('gulp'),
      watch = require('gulp-watch'),
      data = require('gulp-data'),
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
      plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      // jade = require('gulp-jade'),
      path = require('path'),
      fs = require('fs');

const bd = '../public/bower_components/',
      dest = 'dist-gulp/';

const prj = {
  src: {
    css: 'frontend/main.scss',
    js: 'frontend/main.js',
    html: 'frontend/index.pug',
    img: 'frontend/**/*.{jpg,jpeg,png,svg}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
    // view: 'frontend/view/*.{pug,jade}',
    // html: 'frontend/*.html'
  },
  dest: {
    css: 'dist/css',
    js: 'dist/js',
    html: './',
    img: 'dist/img',
    fonts: 'dist/fonts'
    // view: 'dist/view/',
  },
  watch: {
    css: 'frontend/**/*.scss',
    js: 'frontend/**/*.js',
    // html: 'frontend/**/*.{pug,jade}'
    html: ['frontend/**/*.pug', 'frontend/*.json'],
    img: 'frontend/**/*.{jpg,jpeg,png,svg}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
    // view: 'frontend/**/*.{pug,jade}',
    // html: ['frontend/**/*.html', 'dist/view/*.html']
  }
};

gulp.task('html:build', () => gulp
  .src(prj.src.html)
  .pipe(plumber())
  .pipe(data(function(file) {
    return JSON.parse(fs.readFileSync('./frontend/' + path.basename(file.path, '.pug') + '-data.json'));
  }))
  .pipe(pug())
  .pipe(gulp.dest(prj.dest.html))
);

gulp.task('css:build', () => gulp
  .src(prj.src.css)
  // .on('data', function(file) { console.log(file); })
  .pipe(sass())
  .pipe(cssimport())
  // .pipe(prefixer({browsers:['ie >= 10', 'ff >= 5', 'Opera >= 15', 'last 2 Chrome versions']}))
  // .pipe(prefixer())
  .pipe(urlAdjuster({prepend: '../'}))
  // .pipe(urlAdjuster({prepend: '../img/'}))
  // .pipe(urlAdjuster({prependRelative: '../img/'}))
  // .pipe(url({mode: 'absolute', base: 'img'}))
  // .pipe(cleanCSS({keepSpecialComments: 0}))
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(prj.dest.css))
);

gulp.task('js:build', () => gulp
  .src(prj.src.js)
  // .pipe(fileinclude())
  // .pipe(include({extensions: '!{.min.js}'}))
  // .pipe(include({includePaths: __dirname + '/frontend'}))
  .pipe(include())
  // .pipe(uglify())
  .pipe(gulp.dest(prj.dest.js))
);

gulp.task('img:build', () => gulp
  .src(prj.src.img)
  .pipe(gulp.dest(prj.dest.img))
);

gulp.task('fonts:build', () => gulp
  .src(prj.src.fonts)
  .pipe(gulp.dest(prj.dest.fonts))
);

gulp.task('build', [
  'css:build',
  'js:build',
  'html:build',
  'img:build',
  'fonts:build'
]);

gulp.task('watch', () => {
  watch(prj.watch.css,  () => gulp.start('css:build'));
  watch(prj.watch.js,   () => gulp.start('js:build'));
  watch(prj.watch.html, () => gulp.start('html:build'));
  watch(prj.watch.img,  () => gulp.start('img:build'));
  watch(prj.watch.fonts,  () => gulp.start('fonts:build'));
});

gulp.task('default', ['build', 'watch']);

var webpack = require('webpack-stream');
gulp.task('webpack', function() {
  return gulp.src('frontend/entry.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});
