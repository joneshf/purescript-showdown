var gulp = require('gulp')
  , purescript = require('gulp-purescript');

paths = {
    src: [
        'src/**/*.purs',
        'bower_components/purescript-*/src/**/*.purs'
    ],
    dest: 'js'
}

gulp.task('compile', function() {
    // We need this hack for now until gulp does something about
    // https://github.com/gulpjs/gulp/issues/71
    var pscMake = purescript.pscMake();
    pscMake.on('error', function(e) {
        console.error(e.message);
        pscMake.end();
    });
    return gulp.src(paths.src)
        .pipe(pscMake)
        .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
    gulp.watch(paths.src, ['compile']);
});

gulp.task('default', ['compile', 'watch']);
