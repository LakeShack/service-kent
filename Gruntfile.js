const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    webpack: {

      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: false }, webpackConfig)
    },

    aws: grunt.file.readJSON('credentials.json'),

    s3: {
      options: {
        accessKeyId: '<%= aws.accessKeyId %>',
        secretAccessKey: '<%= aws.secretAccessKey %>',
        bucket: 'chairbnb-picture-proxy'
      },
      build: {
        cwd: 'public',
        src: '**'
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-webpack');
  

  // Default task(s).
  grunt.registerTask('default', ['webpack', 's3']);

};