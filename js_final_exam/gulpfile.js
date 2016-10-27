/*
  tasks:
    jshint
    default
      watch
      build
        css:build
        js:build
        html:build
        img:build
        fonts:build

    build --production
*/

'use strict';

const gulp = require('gulp'),
      gulpIf = require('gulp-if'),
      util = require('gulp-util'),
      watch = require('gulp-watch'),
      data = require('gulp-data'),
      plumber = require('gulp-plumber'),
      cleanCSS = require('gulp-clean-css'),
      sass = require('gulp-sass'),
      moduleImporter = require('sass-module-importer'),
      combineMq = require('gulp-combine-mq'),
      urlAdjuster = require('gulp-css-url-adjuster'),
      pug = require('gulp-pug'),
      concat = require('gulp-concat'),
      prefixer = require('gulp-autoprefixer'),
      uglify = require('gulp-uglify'),
      jshint = require('gulp-jshint'),
      path = require('path'),
      fs = require('fs');

const prj = {
  src: {
    html: 'frontend/index.pug',
    css: 'frontend/main.scss',
    js: 'frontend/**/*.js',
    img: 'frontend/**/*.{jpg,jpeg,png}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  },
  dest: {
    html: './',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img',
    fonts: 'dist/fonts'
  },
  watch: {
    html: ['frontend/**/*.pug', 'frontend/*.json'],
    css: 'frontend/**/*.scss',
    js: 'frontend/**/*.js',
    img: 'frontend/**/*.{jpg,jpeg,png,svg}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  }
};

const browsers = ['ie >= 10', 'ff >= 3', 'Opera >= 15', 'Chrome >= 4'];

const production = !!util.env.production;

gulp.task('html:build', () => gulp
  .src(prj.src.html)
  .pipe(plumber())
  .pipe(data(file => {
    var fn = './frontend/' + path.basename(file.path, '.pug') + '-data.json';
    return fileExists(fn) ? JSON.parse(fs.readFileSync(fn)) : {};
  }))
  .pipe(pug())
  .pipe(gulp.dest(prj.dest.html))
);

// nested, expanded, compact, compressed
// const outputStyle = production ? 'compressed' : 'nested';

var outputStyle = 'compressed';
var mq_beautify = false;

gulp.task('css:build', () => gulp
  .src(prj.src.css)
  // .pipe(sass())
  .pipe(sass({ outputStyle: 'nested', importer: moduleImporter() }))
  .pipe(combineMq({beautify: false}))
  .pipe(prefixer({browsers}))
  .pipe(urlAdjuster({prepend: '../'}))
  .pipe(gulpIf(production, cleanCSS({keepSpecialComments: 0})))
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(prj.dest.css))
);

gulp.task('js:build', () => gulp
  .src(prj.src.js)
  .pipe(plumber())
  .pipe(gulpIf(production, uglify()))
  .pipe(concat('main.min.js'))
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
  'html:build',
  'css:build',
  'js:build',
  'img:build',
  'fonts:build'
]);

gulp.task('watch', () => {
  watch(prj.watch.html, () => gulp.start('html:build'));
  watch(prj.watch.css,  () => gulp.start('css:build'));
  watch(prj.watch.js,   () => gulp.start('js:build'));
  watch(prj.watch.img,  () => gulp.start('img:build'));
  watch(prj.watch.fonts, () => gulp.start('fonts:build'));
});

gulp.task('default', ['build', 'watch']);

gulp.task('jshint', () => gulp
  .src([
    'frontend/**/*.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
);

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}
