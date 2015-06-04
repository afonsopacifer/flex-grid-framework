module.exports = function( grunt ) {

  "use strict"

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

	 // watch
    watch: {

      html: {
        files: 'site/*.html',
      },

      styl: {
        files: 'site/assets/stylus/*.styl',
        tasks: ['stylus:compile'],
      },

      css: {
        files: 'site/assets/css/*.css',
      },

      options: {
        livereload: true
      }

    },

    // stylus
    stylus: {
      options: {
        compress: false,
      },
      compile: {
        files: {
          'site/assets/css/style.css':'site/assets/stylus/style.styl' // 1:1 compile
        }
      }
    },

    // connect
    connect: {

      server: {
        options: {
          port: 9000,
          base: "site/",
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }

    }

  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // tasks
  grunt.registerTask( 'default', ['connect','watch']);
};
