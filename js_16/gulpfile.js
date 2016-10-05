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
      util = require('gulp-util'),
      watch = require('gulp-watch'),
      data = require('gulp-data'),
      plumber = require('gulp-plumber'),
      pug = require('gulp-pug'),
      webpack = require('webpack'),
      jshint = require('gulp-jshint'),
      path = require('path'),
      fs = require('fs');

const prj = {
  src: {
    css: 'frontend/main.scss',
    js: './frontend/main.js',
    html: 'frontend/index.pug',
    img: 'frontend/**/*.{jpg,jpeg,png}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  },
  dest: {
    css: 'dist/css',
    js: { filename: 'dist/js/main.js' },
    html: './',
    img: 'dist/img',
    fonts: 'dist/fonts'
  },
  watch: {
    js: 'frontend/**/*.{js,scss,pug}',
    html: ['frontend/**/*.pug', 'frontend/*.json'],
    img: 'frontend/**/*.{jpg,jpeg,png}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  }
};

const production = !!util.env.production;

var webpackConfig = {
  entry: prj.src.js,
  output: prj.dest.js,
  externals: {
    jquery: '$',
    lodash: '_'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(production ? 'production' : 'development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.scss$/,
        loader: "style!css!sass"
      }, {
        test: /\.pug$/,
        loader: "pug"
      }, {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};

if (production) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  );
} else {
  webpackConfig.devtool = "cheap-inline-module-source-map";
}

gulp.task("js:build", function(callback) {
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new util.PluginError("js:build", err);
		util.log("[js:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

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

gulp.task('img:build', () => gulp
  .src(prj.src.img)
  .pipe(gulp.dest(prj.dest.img))
);

gulp.task('fonts:build', () => gulp
  .src(prj.src.fonts)
  .pipe(gulp.dest(prj.dest.fonts))
);

gulp.task('build', [
  'js:build',
  'html:build',
  'img:build',
  'fonts:build'
]);

gulp.task('watch', () => {
  watch(prj.watch.js,    () => gulp.start('js:build'));
  watch(prj.watch.html,  () => gulp.start('html:build'));
  watch(prj.watch.img,   () => gulp.start('img:build'));
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
