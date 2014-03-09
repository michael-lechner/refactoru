module.exports = function (grunt) {

    // CONFIGURE GRUNT
    grunt.initConfig({
        uglify: {
            development: {
                /*Files Array - */
                // files: [
                //     {
                //         // src: 'javascripts/main.js',
                //         // dest: 'javascripts/min/main.min.js'
                //          Can specify exact files or can use wildcards 
                //         src: 'javascripts/*.js',
                //         dest: 'javascripts/min/main.min.js'
                //     }
                // ]
                /* Files as an object */
                // files: {
                //     'javascripts/min/main.min.js': 'javascripts/*.js'
                //      Can also be an array 
                //     //'javascripts/min/main.min.js': ['javascripts/main.js, javascripts/utilities.js']
                // },
                files: [
                    {
                        // expand = multiple sources with multiple destinations
                        expand: true,
                        cwd: 'javascripts',
                        src: ['*.js'],
                        dest: 'javascripts/min',
                        ext: '.min.js'
                    }
                ],
                options: {
                    sourceMap: true
                }
            },
            build: {
                files: {
                    'javascripts/min/app.min.js': 'javascripts/*.js'
                },
                options: {
                    sourceMap: false
                }
            }
        },
        cssmin: {
            development: {
                files: {
                    'css/min/main.min.css': 'css/main.css'
                }
            },
            build: {

            }
        },
        watch: {
            js: {
                files: 'javascripts/*.js',
                tasks: ['uglify:development']
            },
            css: {
                files: 'css/*.css',
                tasks: ['cssmin:development']
            }
        }
    });

    //grunt.registerTask('development', ['uglify:development', 'cssmin:development']);
    /* can also set dev as watch */
    grunt.registerTask('development', ['watch']);
    grunt.registerTask('build', ['uglify:build', 'cssmin:build']);

    grunt.registerTask('default', ['development']);

    //Load in the task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};