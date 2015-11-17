module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      identity: {
        options: {
          server: 'src/stubbed-idproxy.js',
          port: 8002,
          showStack: true,
          hostname:'0.0.0.0'
        }
      },
      api: {
        options: {
          server: 'src/stubbed-api.js',
          port: 8003,
          showStack: true,
          hostname:'0.0.0.0'
        }
      },
      s3: {
        options: {
          server: 'src/stubbed-s3.js',
          port: 8005,
          showStack: true,
          hostname:'0.0.0.0'
        }
      }
    }
  });

  grunt.registerTask('serve', ['express', 'express-keepalive']);

};
