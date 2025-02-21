'use strict';

const fs = require('fs');
const gulp = require('gulp');
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

gulp.task('transform', () => {
  browserify('./src/Application.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('dev', () => {
  gulp.watch('./src/*.js', ['transform']);
});
