'use strict';

/* jshint camelcase: false */


module.exports = function (grunt)
{
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var appConfig = {
        app: 'src',
        example: 'example',
        dist: 'dist',
        tpl: 'src/templates'
    };
    // Define the configuration for all the tasks
    grunt.initConfig({
        // Watches files for changes and runs tasks based on the changed files
        appConfig: appConfig,
        bump: {
            options: {
                files: ['bower.json','package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: [
                    'bower.json',
                    'ng-sweet-alert.js',
                    'package.json'
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'git@github.com:tushariscoolster/ng-sweet-alert.git',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false
            }
        }
    });





    grunt.registerTask('release', function (target)
    {
        grunt.task.run([
            'bump'
        ]);
    });

};
