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

    //Deploy the production files for gh-pages
    'gh-pages': {
      options: {
        base: 'site/'
      },
      src: ['**']
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
  grunt.loadNpmTasks('grunt-gh-pages');

  // tasks
  grunt.registerTask( 'default', ['connect','watch']);
  grunt.registerTask( 'deploy', ['gh-pages']);
};
