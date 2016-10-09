var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var del = require('del');

gulp.task('clean', function() {
    return del([
        'src/**/*.html'
    ]);
});

gulp.task('build', function(done) {
    gulp
        .src('src/**/*.pug')
        .pipe(pug({
            doctype: 'html'
        }))
        .pipe(gulp.dest('./src/'))
        .on('end', done);
});

gulp.task('watch', [ 'clean', 'build' ], function() {
    watch([ 'src/**/*.pug' ], function() { gulp.start('build'); });
});

gulp.task('default', [ 'clean', 'build' ]);
