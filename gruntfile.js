module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      dist: {
        files: {
          'dist/js/app.js' : 'src/js/app.js',
          'dist/jasmine/spec/feedreader.js' : 'src/jasmine/spec/feedreader.js'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'uglify'
	]);
}
