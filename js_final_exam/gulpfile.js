/*
  tasks:
    jshint
    default
      watch
      build
        html:build
        css:build
        js:build
        img:build (with imagemin)
        sprite:build
        fonts:build

    build --production
*/

'use strict';

const gulp = require('gulp'),
      prefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      combineMq = require('gulp-combine-mq'),
      concat = require('gulp-concat'),
      urlAdjuster = require('gulp-css-url-adjuster'),
      data = require('gulp-data'),
      gulpIf = require('gulp-if'),
      imagemin = require('gulp-imagemin'),
      jshint = require('gulp-jshint'),
      plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      util = require('gulp-util'),
      watch = require('gulp-watch'),
      spritesmith = require('gulp.spritesmith'),
      moduleImporter = require('sass-module-importer'),
      path = require('path'),
      fs = require('fs');

const prj = {
  src: {
    html: 'frontend/index.pug',
    css: 'frontend/main.scss',
    js: ['lib/**/*.js', 'frontend/**/*.js', '!lib/_*/**'],
    img: ['frontend/**/*.{jpg,jpeg,png}', 'lib/**/*.{jpg,jpeg,png,gif}', '!frontend/_*/**', '!lib/_*/**'],
    sprite: 'frontend/_sprite/*.png',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  },
  dest: {
    html: './',
    css: 'dist/css',
    js: 'dist/js',
    img: 'dist/img',
    sprite_path: 'img/sprite.png',
    sprite_img: 'dist/img/sprite.png',
    sprite_css: 'frontend/sprite.scss',
    fonts: 'dist/fonts'
  },
  watch: {
    html: ['frontend/**/*.pug', 'frontend/*.json'],
    css: 'frontend/**/*.scss'
  }
};

const browsers = ['ie >= 8', 'ff >= 3', 'Opera >= 15', 'Chrome >= 4'];

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

gulp.task('css:build', () => gulp
  .src(prj.src.css)
  // .pipe(sass())
  .pipe(sass({ outputStyle: 'nested', importer: moduleImporter() }))
  .pipe(combineMq({beautify: false}))
  .pipe(prefixer({browsers}))
  .pipe(urlAdjuster({prepend: '../'}))  // convert to pretty :-(
  .pipe(gulpIf(production, cleanCSS({keepSpecialComments: 0})))
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(prj.dest.css))
);

gulp.task('js:build', () => gulp
  .src(prj.src.js)
  .pipe(plumber())
  .pipe(gulpIf(production, uglify({
    compress: {
      // support_ie8: true // ?, compress error
    }
  })))
  .pipe(concat('main.js', {newLine: ';'}))
  .pipe(gulp.dest(prj.dest.js))
);

gulp.task('img:build', () => gulp
  .src(prj.src.img)
  .pipe(imagemin({
    optimizationLevel: 5
  }))
  .pipe(gulp.dest(prj.dest.img))
);

gulp.task('sprite:build', () => {
  var spriteData = gulp.src(prj.src.sprite).pipe(spritesmith({
    cssFormat: 'scss',
    imgPath: prj.dest.sprite_path,
    imgName: prj.dest.sprite_img,
    cssName: prj.dest.sprite_css
  }));
  return spriteData.pipe(gulp.dest('./'));
});

gulp.task('fonts:build', () => gulp
  .src(prj.src.fonts)
  .pipe(gulp.dest(prj.dest.fonts))
);

gulp.task('build', [
  'html:build',
  'css:build',
  'js:build',
  'img:build',
  'sprite:build',
  'fonts:build'
]);

gulp.task('watch', () => {
  watch(prj.watch.html, () => gulp.start('html:build'));
  watch(prj.watch.css,  () => gulp.start('css:build'));
  watch(prj.src.js,     () => gulp.start('js:build'));
  watch(prj.src.img,    () => gulp.start('img:build'));
  watch(prj.src.sprite, () => gulp.start('sprite:build'));
  watch(prj.src.fonts,  () => gulp.start('fonts:build'));
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
