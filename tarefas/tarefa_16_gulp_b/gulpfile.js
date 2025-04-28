const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function compila(){
    return new Promise((done) => {
        gulp.src('source/scss/**/*.scss')
            .pipe(maps.init())
            .pipe(sass())
            .pipe(concat('main.css'))
            .pipe(maps.write('.'))
            .pipe(gulp.dest('dist/css'))
            .on('end', done)
    })
}

function watch(){
    gulp.watch('source/scss/**/*.scss', compila);
}

exports.default = gulp.series(compila, watch)