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
      webpack = require('webpack-stream'),
      // named = require('vinyl-named'),
      fs = require('fs');

const bd = '../public/bower_components/';

const prj = {
  src: {
    css: 'frontend/main.scss',
    js: 'frontend/main.js',
    html: 'frontend/index.pug',
    img: 'frontend/**/*.{jpg,jpeg,png}',
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
    img: 'frontend/**/*.{jpg,jpeg,png}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
    // view: 'frontend/**/*.{pug,jade}',
    // html: ['frontend/**/*.html', 'dist/view/*.html']
  }
};

const webpackConfig = {
  devtool: "cheap-inline-module-source-map",
  externals: {
    jquery: '$'
  },
  module: {
    loaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel',
      //   query: {
      //     presets: ['es2015', 'stage-0']
      //   }
      // }
    ]
    // noParse: /jquery\/jquery.js/
  }
}

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

gulp.task('css:build', () => gulp
  .src(prj.src.css)
  // .on('data', file => console.log(file))
  .pipe(plumber())
  .pipe(sass())
  .pipe(cssimport())
  .pipe(urlAdjuster({prepend: '../'}))
  // .pipe(prefixer({browsers:['ie >= 10', 'ff >= 5', 'Opera >= 15', 'last 2 Chrome versions']}))
  // .pipe(prefixer())
  .pipe(prefixer({
      browsers: ['last 30 versions']
  }))
  // .pipe(urlAdjuster({prepend: '../img/'}))
  // .pipe(urlAdjuster({prependRelative: '../img/'}))
  // .pipe(url({mode: 'absolute', base: 'img'}))
  // .pipe(cleanCSS({keepSpecialComments: 0}))
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(prj.dest.css))
);

gulp.task('js:build', () => gulp
  .src(prj.src.js)
  // .pipe(include())
  // .pipe(uglify())
    .on('data', file => file.named = path.basename(file.path, '.js'))
    // .pipe(named())
    .pipe(webpack(webpackConfig))
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

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}
