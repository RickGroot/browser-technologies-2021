const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
    "./src/styles/main.css",
])
    .pipe(concat("index.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("./public/styles"))