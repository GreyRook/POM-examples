var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('default', ['jshint']);

gulp.task('jshint', function () {
    return gulp.src([
            './examples/basics/simple.json'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-summary'));
});
