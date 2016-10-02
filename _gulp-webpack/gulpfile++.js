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
      webpack = require('webpack'),
      webpackStream = require('webpack-stream'),
      // named = require('vinyl-named'),
      jshint = require('gulp-jshint'),
      path = require('path'),
      fs = require('fs');

const bd = '../public/bower_components/';

const prj = {

  src: {
    css: 'frontend/main.scss',

    // for gulp native
    // js: 'frontend/main.js',

    // for webpack native
    js: './frontend/main.js',

    html: 'frontend/index.pug',
    img: 'frontend/**/*.{jpg,jpeg,png}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
    // view: 'frontend/view/*.{pug,jade}',
    // html: 'frontend/*.html'
  },

  dest: {
    css: 'dist/css',

    // for gulp native
    // js: 'dist/js',

    // for webpack native
    js: {
      path: 'dist/js',
      filename: 'main.js'
    },

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

const production = !!util.env.production;

var webpackConfig = {
  // context: path.join(__dirname, 'frontend'),
  entry: prj.src.js,
  output: prj.dest.js,
  externals: {
    jquery: '$'
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
      }
    ]
    // noParse: /jquery\/jquery.js/
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
/*
gulp.task('js:build', () => gulp
  .src(prj.src.js)
  // .pipe(include())
  .on('data', file => file.named = path.basename(file.path, '.js'))
  // .pipe(named())
  // .pipe(uglify())
  .pipe(webpackStream(webpackConfig, webpack))
  .pipe(gulp.dest(prj.dest.js))
);
*/
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
  .pipe(prefixer('last 10 versions'))
  // .pipe(urlAdjuster({prepend: '../img/'}))
  // .pipe(urlAdjuster({prependRelative: '../img/'}))
  // .pipe(url({mode: 'absolute', base: 'img'}))
  // .pipe(cleanCSS({keepSpecialComments: 0}))
  .pipe(production ? cleanCSS({keepSpecialComments: 0}) : util.noop())
  // .pipe(concat('main.min.css'))
  .pipe(gulp.dest(prj.dest.css))
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
  watch(prj.watch.css,   () => gulp.start('css:build'));
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
