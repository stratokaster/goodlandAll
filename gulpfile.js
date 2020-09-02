const gulp = require('gulp');
const sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('sass/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({"outputStyle": "expanded"}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch('sass/*.sass', gulp.series('sass'));
});