 // compile all .js files except the ones coming from node_modules
var es6ify = require('es6ify').configure(/^(?!.*node_modules)+.+\.js$/);

module.exports = function(grunt){

    /* Load all grunt tasks. */
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify:{
            options:{
                transform:[es6ify],
                bundleOptions:{
                    debug: true
                },
                browserifyOptions:{
                    noParse: ['./public/app.js']
                }
            },
            files:{
                'public/app.js' : ['client/app.js']
            }
        },
        watch:{
            files: ['client/**/*.js'],
            tasks:['browserify']
        }
    });
}
