const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', function() {
    gulp.src('lib/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'))
});
