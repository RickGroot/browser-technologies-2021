const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer')

return gulp.src([
        "./src/styles/main.css",
        "./src/styles/login.css",
        "./src/styles/home.css",
        "./src/styles/form.css",
    ])
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(concat("index.css"))
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest("./public/styles"))