import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import map from "gulp-sourcemaps";
import imgs from "gulp-imagemin";
import uglify from "gulp-uglify";

function compila(){
    return gulp.src('source/estilos/*.scss')
        .pipe(map.init())
        .pipe(gulpSass(sass)())
        .pipe(map.write('.'))
        .pipe(gulp.dest('build/estilos'))
}

function compressImagens(){
    return gulp.src('source/imagens/*')
        .pipe(imgs())
        .pipe(gulp.dest('build/imagens/'))
}

function minifica(){
    return gulp.src('source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'));
}

export default function(){
    gulp.watch('source/estilos/*.scss',{ignoreInitial: false}, compila)
    gulp.watch('source/imagens/*', {ignoreInitial: false}, compressImagens)
    gulp.watch('source/scripts/*', {ignoreInitial: false}, minifica)
}