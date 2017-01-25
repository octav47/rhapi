'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    rimraf = require('rimraf');

var path = {
    build: 'build/',
    dist: 'dist/',
    src: 'src/main.js'
};

gulp.task('clean:build', (cb) => rimraf(path.build, cb));
gulp.task('clean:dist', (cb) => rimraf(path.dist, cb));
gulp.task('clean', ['clean:build', 'clean:dist']);


gulp.task('build', () => {
    gulp.src(path.src)
        .pipe(rigger())
        .pipe(rename('rhapi.js'))
        .pipe(gulp.dest(path.build));
});

gulp.task('dist', () => {
    gulp.src(path.src)
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.dist));
});

gulp.task('default', ['build', 'dist']);