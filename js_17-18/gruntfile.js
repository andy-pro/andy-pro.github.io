module.exports = function(grunt) {

  var bd = '../public/bower_components/',
      dest = 'dist-grunt/';

  var styles = [
    bd + 'normalize-css/normalize.css',
    bd + 'chosen/chosen.css',
    'frontend/styles.css',
    'frontend/*/*.css'
  ];

  var scripts = [
    bd + 'jquery/dist/jquery-1.12.4.min.js',
    bd + 'chosen/chosen.jquery.js',
    bd + 'jquery-color/dist/jquery.color.plus-names.min.js',
    '../public/js/animate.js',
    'frontend/*/*.js',
    'frontend/*.js'
  ];

  grunt.initConfig({

    cssmin: {
      styles: {
        files: {
          [dest + 'main.min.css']: styles
        }
      }
    },

    uglify: {
      javascript: {
        files: {
          [dest + 'main.min.js']: scripts
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: bd + 'chosen/chosen-sprite.png', dest},
          {expand: true, flatten: true, src: 'frontend/index-grunt.html', dest: ''}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);

};
