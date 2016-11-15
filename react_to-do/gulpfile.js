/*
  tasks:
    jasmin
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
      jshint = require('gulp-jshint'),
      jasmineBrowser = require('gulp-jasmine-browser'),
      webpack = require('webpack'),
      webpackStream = require('webpack-stream'),
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
    html: './',
    img: 'dist/img',
    fonts: 'dist/fonts'
  },
  watch: {
    js: ['frontend/**/*.{js,scss}', 'frontend/*/*.pug'],
    html: ['frontend/**/*.pug', 'frontend/*.json'],
    img: 'frontend/**/*.{jpg,jpeg,png,svg}',
    fonts: 'frontend/_fonts/*.{eot,svg,ttf,woff}'
  }
};

const production = !!util.env.production;

var webpackConfig = {
  context: path.join(__dirname, 'frontend'),
  entry: {
    main: './main'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: "js/[name].js"
  },
  watchOptions: {
    aggregateTimeout: 200
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(production ? 'production' : 'development')
    })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "frontend")],
    modulesDirectories: ["node_modules"]
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.scss$/,
        loader: "style?singleton!css!sass"
      }, {
        test: /\.pug$/,
        loader: "pug"
      }, {
        test: /\.json$/,
        loader: "json"
      }, {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: "file?name=img/[path][name].[ext]"
      }, {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file?name=fonts/[name].[ext]"
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
  webpackConfig.watch = true;
}

gulp.task("js:build", () =>
	webpack(webpackConfig, (err, stats) => {
		if(err) throw new util.PluginError("js:build", err);
		util.log("[js:build]", stats.toString({
			colors: true
		}));
	})
);

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
  'html:build'
  // 'img:build'
  // 'fonts:build'
]);

gulp.task('watch', () => {
  // watch(prj.watch.js,    () => gulp.start('js:build'));
  watch(prj.watch.html,  () => gulp.start('html:build'));
  // watch(prj.watch.img,   () => gulp.start('img:build'));
  // watch(prj.watch.fonts, () => gulp.start('fonts:build'));
});

gulp.task('default', ['build', 'watch']);

gulp.task('jshint', () => gulp
  .src([
    'frontend/**/*.js'
  ])
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
);

gulp.task('jasmine', () => {
  let JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin'),
      plugin = new JasminePlugin();
  return gulp.src(['spec/**/*[sS]pec.js'])
    .pipe(webpackStream({watch: true, output: {filename: 'spec.js'}, plugins: [plugin]}))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}
