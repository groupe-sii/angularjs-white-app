'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject', 'config'], function () {
    gulp.watch([
        path.join(conf.paths.src, '/*.html'),
        'bower.json'
    ], ['inject']);

    gulp.watch([
        path.join(conf.paths.config, '/project.config.json'),
        path.join(conf.paths.config, '/**/*.json')
    ], ['config']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss'),
        path.join(conf.paths.src, '/styles/**/*.css'),
        path.join(conf.paths.src, '/styles/**/*.scss')
    ], function(event) {
        if(isOnlyChange(event)) {
            gulp.start('styles');
        } else {
            gulp.start('inject');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
        if(isOnlyChange(event)) {
            gulp.start('scripts');
        } else {
            gulp.start('inject');
        }
    });


    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
        browserSync.reload(event.path);
    });
});
