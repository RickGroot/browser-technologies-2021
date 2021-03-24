const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

gulp.src([
    "./src/scripts/client/main.js"
])
    .pipe(concat("index.js"))
    .pipe(minify())
    .pipe(gulp.dest("./public/js"))