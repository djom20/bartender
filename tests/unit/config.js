// Karma configuration
// Generated on Tue Apr 19 2016 10:27:25 GMT-0500 (COT)

module.exports = function(config) {
    config.set({
        plugins: ['karma-mocha', 'karma-phantomjs-launcher', 'karma-babel-preprocessor', 'karma-browserify', 'karma-junit-reporter', 'karma-coverage'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-route/angular-route.js',
            "bower_components/chai/chai.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js",
            'app/scripts/app.js',
            'app/scripts/**/*.js',
            'test/**/*.spec.js'
        ],
        exclude: [],
        browserify: {
            debug: true,
            transform: ['brfs']
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            },
            filename: function(file) {
                return file.originalPath.replace(/\.js$/, '.es5.js');
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        },
        reporters: ['dots', 'junit'],
        junitReporter: {
            outputFile: '../test-results.xml'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: true,
        browsers: ['PhantomJS'],
        concurrency: Infinity
    });
};
