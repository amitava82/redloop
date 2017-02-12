/**
 * Created by sasidhar on 07/08/16.
 */

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile:{
                options: {
                    compress: true,
                    paths: ['node_modules/bootstrap/less', 'css/less']
                },
                files: {
                    "css/styles.css":"css/less/styles.less"
                }
            }
        },
        watch:{
            less:{
                files: ["css/less/**/*.less", "css/theme.less"],
                tasks: "less:compile",
                options:{
                    livereload: {
                        host: 'localhost',
                        port: 9000
                    }
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: __dirname
                }
            }
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['less', 'connect', 'watch']);

};