'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    fs = require('fs'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('default', ['styles:build', 'scripts:build', 'modules-js:build'], function() {

});

gulp.task('server', function() {
    // Run the local server
    browserSync.init({
        notify: false,
        port: 9000,
        ui: false,
        server: {
            baseDir: './',
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch('assets/scss/**/*.scss', ['styles:build']);
    gulp.watch('assets/coffee/**/*.js', ['scripts:build']);
    gulp.watch('modules/**/*.js', ['modules-js:build']);

    gulp.watch([
        'assets/scss/**/*.scss',
        'assets/coffee/**/*.js',
        'modules/**/*.js',
    ]).on('change', reload);
});

gulp.task('styles:build', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('scripts:build', function() {
    return gulp.src('assets/coffee/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('modules-js:build', function() {
    return gulp.src('assets/coffee/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('assets/js'));
});
