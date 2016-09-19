module.exports = function(grunt) {

  var bd = '../public/bower_components/',
      dest = 'dist-grunt/';

  grunt.initConfig({

    cssmin: {
      styles: {
        files: {
          [dest + 'main.min.css']: [
            bd + 'normalize-css/normalize.css',
            bd + 'chosen/chosen.css',
            'frontend/styles.css',
            'frontend/menu/styles.css',
            'frontend/car-ousel/styles.css'
          ]
        }
      }
    },

    uglify: {
      javascript: {
        files: {
          [dest + 'main.min.js']: [
            bd + 'jquery/dist/jquery-1.12.4.min.js',
            bd + 'chosen/chosen.jquery.js',
            bd + 'jquery-color/dist/jquery.color.plus-names.min.js',
            '../public/js/animate.js',
            'frontend/menu/index.js',
            'frontend/main_menu_data.js',
            'frontend/car-ousel/index.js',
            'frontend/main.js'
          ]
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
