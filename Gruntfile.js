module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compileProject: {
                options : {
                    appDir: "./src",
                    dir: "./build",
                    baseUrl: "js/application",
                    modules: [
                        {
                            name: 'initialize'
                        }
                    ],
                    paths: {
                        jquery : '../vendor/jquery/jquery-1.10.2',
                        underscore : '../vendor/underscore/underscore',
                        backbone : '../vendor/backbone/backbone',
                        handlebars : '../vendor/handlebars/handlebars',
                        bootstrap : '../vendor/bootstrap/bootstrap',
                        text : '../vendor/require/text',
                        async : '../vendor/require/async'
                    },
                    shim: {
                        underscore: {
                            exports: '_'
                        },
                        backbone: {
                            deps: ['underscore', 'jquery'],
                            exports: 'Backbone'
                        },
                        handlebars: {
                            exports: 'Handlebars'
                        }
                    },
                    optimizeCss: "standard",
                    inlineText: true,
                    removeCombined: true
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/**/*',
                tasks: ['requirejs'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('runNode', function () {
        grunt.util.spawn({
            cmd: 'node',
            args: ['./node_modules/nodemon/nodemon.js', '--debug', 'server.js'],
            opts: {
                stdio: 'inherit'
            }
        }, function () {
            grunt.fail.fatal(new Error("nodemon quit"));
        });
    });


    grunt.registerTask('compile', ['requirejs']);

    // Run the server and watch for file changes
    grunt.registerTask('server', ['runNode', 'compile', 'watch']);

    // Default task(s).
    grunt.registerTask('default', ['compile']);
};